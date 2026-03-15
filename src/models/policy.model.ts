import mongoose from "mongoose";

// Enums for policy type and status
export enum PolicyType {
  LIFE = "life",
  HEALTH = "health",
  AUTO = "auto",
  HOME = "home",
}

export enum PolicyStatus {
  ACTIVE = "active",
  EXPIRED = "expired",
  CANCELLED = "cancelled",
}

// Policy schema
const policySchema = new mongoose.Schema({
  policyId: { type: String, required: true, unique: true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  policyNumber: { type: String, required: true, unique: true },
  policyType: { type: String, enum: Object.values(PolicyType), required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  premiumAmount: { type: Number, required: true },
  coverageAmount: { type: Number, required: true },
  status: { type: String, enum: Object.values(PolicyStatus), default: PolicyStatus.ACTIVE },
});

export default mongoose.model("Policy", policySchema);