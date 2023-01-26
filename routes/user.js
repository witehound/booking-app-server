import express from "express";
import {
  updateUser,
  deleteUser,
  fetchUser,
  fetchAllUsers,
} from "../controllers/index.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", fetchUser);
//GETALL
router.get("/", fetchAllUsers);

export default router;
