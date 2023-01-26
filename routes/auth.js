import express from "express";
import { register, login } from "../controllers/index.js";

const router = express.Router();

//CREATE
router.post("/register/:id", register);
//SIGNIN
router.post("/login", login);

export default router;
