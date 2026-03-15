import mongoose from "mongoose";

// Claim status enum
export enum ClaimStatus {
  SUBMITTED = "submitted",
  APPROVED = "approved",
  REJECTED = "rejected",
  PAID = "paid",
}

// Claim schema
const claimSchema = new mongoose.Schema({
  claimId: { type: String, required: true, unique: true },
  policyId: { type: mongoose.Schema.Types.ObjectId, ref: "Policy", required: true },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  claimDate: { type: Date, required: true },
  claimAmount: { type: Number, required: true },
  status: { type: String, enum: Object.values(ClaimStatus), default: ClaimStatus.SUBMITTED },
  description: { type: String, required: true },
  disbursementAmount: { type: Number }, //filled this after processing
});

export default mongoose.model("Claim", claimSchema);