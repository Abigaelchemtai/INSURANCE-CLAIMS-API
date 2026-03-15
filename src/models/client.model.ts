import mongoose from "mongoose";

//The Client Schema
const clientSchema = new mongoose.Schema({
  clientId: { type: String, required: true, unique: true }, // unique identifier
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
});

// Export the model
export default mongoose.model("Client", clientSchema);