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
router.delete("/", () => {});
//GET
router.get("/", () => {});
//GETALL
router.post("/all", () => {});

export default router;
