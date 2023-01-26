import { UserModel } from "../models/index.js";

const register = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const newUser = new UserModel({
    userName,
    email,
    password,
  });
  try {
    const savedUser = await newUser.save();
    res.satus(200).json({ message: `user has beeen created` });
  } catch (error) {
    next(error);
  }
};

export { register };
