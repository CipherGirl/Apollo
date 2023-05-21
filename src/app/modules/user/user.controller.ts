import { Request, Response } from "express";
import {
  createUsertoDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";
import User from "./user.model";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "Success",
    data: users,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    status: "Success",
    data: user,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUsertoDB(data);

  res.status(200).json({
    status: "Success",
    data: user,
  });
};
