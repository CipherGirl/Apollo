import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();

// Use cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  /** Intserting a test data into mongodb
   * 1. Interface
   * 2. Schema
   * 3. Model
   * Database Query
   */

  // Creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "Male" | "Female";
    email?: string;
    contactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

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

  res.send("Hello World!");
});

export default app;
