import express from "express";
import {
  createRoom,
  updateRoom,
  fetchRoom,
  fetchRooms,
  deleteRoom,
  updateRoomAvailability,
} from "../controllers/index.js";
import { verifyAdmin, verifyUser } from "../lib/index.js";

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//UPDATE AVAIL
router.put("/availability/:id/", updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//GET
router.get("/:id", fetchRoom);
//GETALL
router.get("/", fetchRooms);

export default router;
