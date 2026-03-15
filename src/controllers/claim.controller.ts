import { Request, Response } from "express";
import Claim from "../models/claim.model";
import { createClaimSchema } from "../validators/claim.validator";
import Policy from "../models/policy.model";
import { ClaimStatus } from "../models/claim.model";
import { getTotalPremiumByClient } from "./policy.controller";

export const submitClaim = async (req: Request, res: Response) => {
  try {
    // Validate input
    const { error } = createClaimSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details?.[0]?.message || "Invalid input" });

    const { policyId, claimAmount, clientId } = req.body;

    // Check if policy exists
    const policy = await Policy.findById(policyId);
    if (!policy) return res.status(404).json({ message: "Policy not found" });

    // Ensure client is linked to the policy
    if (policy.clientId.toString() !== clientId) {
      return res.status(400).json({ message: "Claim must be for the client owning the policy" });
    }

    // Check claimAmount <= policy coverageAmount
    if (claimAmount > policy.coverageAmount) {
      return res.status(400).json({ message: "Claim amount exceeds policy coverage" });
    }

    // Create claim with default status 'submitted'
    const claim = await Claim.create(req.body);
    res.status(201).json(claim);

  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "ClaimId already exists" });
    }
    res.status(500).json({ message: err.message });
  }
};
export const processClaim = async (req: Request, res: Response) => {
  try {
    const { claimId, action } = req.body; // action = approve | reject

    // Find claim
    const claim = await Claim.findOne({ claimId });
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    // Find policy
    const policy = await Policy.findById(claim.policyId);
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    // Business Rule → policy must be active
    if (policy.status !== "active") {
      claim.status = ClaimStatus.REJECTED;
      await claim.save();

      return res.json({
        message: "Claim rejected because policy is not active",
        claim
      });
    }

    // Approve or Reject
    if (action === "approve") {

      claim.status = ClaimStatus.APPROVED;

      // Calculate disbursement
      claim.disbursementAmount = Math.min(
        claim.claimAmount,
        policy.coverageAmount
      );

    } else if (action === "reject") {

      claim.status = ClaimStatus.REJECTED;
      claim.disbursementAmount = 0;

    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    await claim.save();

    res.json({
      message: "Claim processed successfully",
      claim
    });

  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const getClientClaims = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;

    const claims = await Claim.aggregate([
      {
        $match: {
          clientId: new (require("mongoose")).Types.ObjectId(clientId)
        }
      },
      {
        $group: {
          _id: "$status",
          totalClaims: { $sum: 1 },
          claims: { $push: "$$ROOT" }
        }
      }
    ]);

    res.json(claims);

  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// claim.controller.ts
export const getClaimsByPolicyType = async (req: Request, res: Response) => {
  try {
    const result = await Claim.aggregate([
      {
        $lookup: {
          from: "policies",
          localField: "policyId",
          foreignField: "_id",
          as: "policy"
        }
      },
      { $unwind: "$policy" },
      {
        $group: {
          _id: "$policy.policyType",
          totalClaims: { $sum: 1 },
          totalClaimAmount: { $sum: "$claimAmount" }
        }
      }
    ]);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
