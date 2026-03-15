import mongoose from "mongoose";


const clientSchema = new mongoose.Schema({
  clientId: { type: String, required: true, unique: true }, 
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
});


export default mongoose.model("Client", clientSchema);
