import { Request, Response } from "express";
import Client from "../models/client.model";
import { createClientSchema } from "../validators/client.validator";

export const createClient = async (req: Request, res: Response) => {
  try {
    // Validate input
    const { error } = createClientSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details?.[0]?.message || "Invalid input" });

    // Create client
    const client = await Client.create(req.body);
    res.status(201).json(client);

  } catch (err: any) {
    if (err.code === 11000) { // duplicate clientId or email
      return res.status(400).json({ message: "ClientId or Email already exists" });
    }
    res.status(500).json({ message: err.message });
  }
};