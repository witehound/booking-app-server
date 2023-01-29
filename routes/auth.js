import express from "express";
import { register, login } from "../controllers/index.js";

const router = express.Router();

//CREATE
router.post("/register", register);
//SIGNIN
router.post("/login", login);

export default router;
