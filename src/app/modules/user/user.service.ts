import { IUser } from './user.interface';
import User from './user.model';

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

export const createUsertoDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  // user.fullName() // Custom Instance Method
  await user.save();
  return user;
};
