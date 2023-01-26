import express from "express";
import { register, login } from "../controllers/index.js";

const router = express.Router();

//CREATE
router.post("/register", register);
//SIGNIN
router.post("/login", login);
//DELETE
router.delete("/:id", () => {});
//GET
router.get("/:id", () => {});
//GETALL
router.get("/", () => {});

export default router;
