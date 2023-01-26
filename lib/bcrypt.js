import bcrypt from "bcryptjs";

export const hashPassword = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
};
