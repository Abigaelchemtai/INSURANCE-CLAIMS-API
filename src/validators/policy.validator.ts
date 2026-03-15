import Joi from "joi";
import { PolicyType, PolicyStatus } from "../models/policy.model";

export const createPolicySchema = Joi.object({
  policyId: Joi.string().required(),
  clientId: Joi.string().required(),
  policyNumber: Joi.string().required(),
  policyType: Joi.string().valid(...Object.values(PolicyType)).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref('startDate')).required()
    .messages({ 'date.greater': 'End date must be after start date' }),
  premiumAmount: Joi.number().positive().required(),
  coverageAmount: Joi.number().positive().required(),
  status: Joi.string().valid(...Object.values(PolicyStatus)).optional(),
});