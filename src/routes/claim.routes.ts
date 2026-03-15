import express from "express";
import { getClientClaims, processClaim, submitClaim, getClaimsByPolicyType } from "../controllers/claim.controller";

const router = express.Router();

router.post("/", submitClaim);
router.post("/process",processClaim);
router.get("/client/:clientId", getClientClaims);
router.get("/claims-by-policy-type", getClaimsByPolicyType);

export default router;