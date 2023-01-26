import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  fetchHotel,
  fetchAllHotels,
} from "../controllers/index.js";
import { verifyAdmin } from "../lib/index.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", fetchHotel);
//GETALL
router.get("/", fetchAllHotels);

export default router;
