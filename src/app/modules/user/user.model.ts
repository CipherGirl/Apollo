import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// Creating Schema
const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  email: { type: String },
  dateOfBirth: { type: String },
  gender: { type: String, enum: ["Male", "Female"] },
  contactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// Creating Model
const User = model<IUser>("User", userSchema);

export default User;