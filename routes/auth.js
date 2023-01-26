import express from "express";
import { register, login } from "../controllers/index.js";
import { verifyUser } from "../lib/index.js";

const router = express.Router();

//CREATE
router.post("/register/:id", verifyUser, register);
//SIGNIN
router.post("/login", login);

export default router;
