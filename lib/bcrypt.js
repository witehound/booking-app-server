import bcrypt from "bcryptjs";

export const hashPassword = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
};

export const compareHashPassword = async (pass, hash) => {
  return await bcrypt.compare(pass, hash);
};
