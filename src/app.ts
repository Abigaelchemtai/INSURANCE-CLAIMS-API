import express from "express";
import clientRoutes from "./routes/client.routes";
import policyRoutes from "./routes/policy.routes";
import claimRoutes from "./routes/claim.routes";

const app = express();

app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/claims", claimRoutes);

app.get("/", (req, res) => {
  res.send("Insurance Claims API running");
});

export default app;