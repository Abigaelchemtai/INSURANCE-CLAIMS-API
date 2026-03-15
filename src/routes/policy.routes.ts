import express from "express";
import { createPolicy, getTotalPremiumByClient } from "../controllers/policy.controller";

const router = express.Router();

router.post("/", createPolicy);
router.get("/premium/:clientId", getTotalPremiumByClient);

export default router;