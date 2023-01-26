import express from "express";
import {
  updateUser,
  deleteUser,
  fetchUser,
  fetchAllUsers,
} from "../controllers/index.js";
import { verifyUser, verifyAdmin } from "../lib/index.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, fetchUser);
//GETALL
router.get("/", verifyAdmin, fetchAllUsers);

export default router;
