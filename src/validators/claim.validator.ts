import Joi from "joi";
import { ClaimStatus } from "../models/claim.model";

export const createClaimSchema = Joi.object({
  claimId: Joi.string().required(),
  policyId: Joi.string().required(),
  clientId: Joi.string().required(),
  claimDate: Joi.date().required(),
  claimAmount: Joi.number().positive().required(),
  status: Joi.string().valid(...Object.values(ClaimStatus)).optional(),
  description: Joi.string().required(),
});