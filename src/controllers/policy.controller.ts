import { Request, Response } from "express";
import Policy from "../models/policy.model";
import { createPolicySchema } from "../validators/policy.validator";
import Client from "../models/client.model";

export const createPolicy = async (req: Request, res: Response) => {
  try {
    // Validate input
    const { error } = createPolicySchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details?.[0]?.message || "Invalid input" });

    const { clientId } = req.body;

    //ensure the clients exist 
    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });


    // Create policy
    const policy = await Policy.create(req.body);
    res.status(201).json(policy);

  } catch (err: any) {
    if (err.code === 11000) { // duplicate policyId or policyNumber
      return res.status(400).json({ message: "PolicyId or PolicyNumber already exists" });
    }
    res.status(500).json({ message: err.message });
  }
};
export const getTotalPremiumByClient = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;

    const result = await Policy.aggregate([
      {
        $match: {
          clientId: new (require("mongoose")).Types.ObjectId(clientId)
        }
      },
      {
        $group: {
          _id: "$clientId",
          totalPremium: { $sum: "$premiumAmount" }
        }
      }
    ]);

    res.json(result[0] || { totalPremium: 0 });

  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
