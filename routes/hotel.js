import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  fetchHotel,
  fetchAllHotels,
  fetchCountByCity,
  fetchCountByType,
  geHotelRooms,
} from "../controllers/index.js";
import { verifyAdmin, verifyUser } from "../lib/index.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", fetchHotel);
//GETALL
router.get("/", fetchAllHotels);
//BYCITY
router.get("/countByCity", fetchCountByCity);
//BYTYPE
router.get("/countByType", fetchCountByType);
//ROOMS
router.get("/rooms/:id", geHotelRooms);

export default router;
