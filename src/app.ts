import express, { Application } from "express";
import cors from "cors";
import userRoutes from './app/modules/user/user.route';

const app: Application = express();

// Use cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
