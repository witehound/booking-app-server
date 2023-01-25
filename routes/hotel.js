import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  fetchHotel,
  fetchAllHotels,
} from "../controllers/index.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", fetchHotel);
//GETALL
router.get("/", fetchAllHotels);

export default router;
