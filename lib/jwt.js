import jwt from "jsonwebtoken";

export const createJwtToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWTSECRETKEY);
};
