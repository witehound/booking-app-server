import jwt from "jsonwebtoken";
const key = process.env.JWTSECRETKEY;

export const createJwtToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, key);
};
