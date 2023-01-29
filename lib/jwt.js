import jwt from "jsonwebtoken";
import { createError } from "./index.js";

export const createJwtToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWTSECRETKEY);
};

export const verifyTokn = (req, res, next) => {
  const { access_token } = req.cookies;
  console.log("token", access_token);
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }
  jwt.verify(token, process.env.JWTSECRETKEY, (err, user) => {
    if (err) {
      return next(createError(403, "invalid token"));
    }
    req.user = user;
    console.log(req.user);
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyTokn(req, res, () => {
    if (req.user.isAdmin) {
      console.log(req.params.id, 2);
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyTokn(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};
