import express from "express";
import {
  createRoom,
  updateRoom,
  fetchRoom,
  fetchRooms,
  deleteRoom,
} from "../controllers/index.js";
import { verifyAdmin } from "../lib/index.js";

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
//GET
router.get("/:id", fetchRoom);
//GETALL
router.get("/", fetchRooms);

export default router;
