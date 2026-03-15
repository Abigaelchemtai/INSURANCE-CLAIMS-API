// src/server.ts
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import clientRoutes from "./routes/client.routes";
import policyRoutes from "./routes/policy.routes";
import claimRoutes from "./routes/claim.routes";


dotenv.config(); // <-- load .env variables first

const app = express();

connectDB(); // connect to MongoDB

app.use(express.json());
app.use("/api/clients", clientRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/claims", claimRoutes);

app.get("/", (req, res) => {
  res.send("Insurance Claims API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;