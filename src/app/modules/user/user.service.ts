import User from "./user.model";

export const createUsertoDB = async () => {
  const user = new User({
    id: "004",
    role: "student",
    password: "123456",
    name: {
      firstName: "Hasna",
      middleName: "Hena",
      lastName: "Complete",
    },
    email: "test@gmail.com",
    gender: "Female",
    contactNo: "01912345678",
    presentAddress: "221B Baker Street",
    permanentAddress: "221B Baker Street",
  });
  await user.save();
  return user;
};


