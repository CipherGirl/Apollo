import { Request, Response } from "express";
import { createUsertoDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const user = await createUsertoDB();

  res.status(200).json({
    status: "Success",
    data: user,
  });
};
