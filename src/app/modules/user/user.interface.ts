import { Model } from 'mongoose';

// Creating an interface
export interface IUser {
  id: string;
  role: 'student';
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: 'Male' | 'Female';
  email?: string;
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): IUser[];
}
