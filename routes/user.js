import express from "express";

const router = express.Router();

//CREATE
router.post("/", () => {});
//UPDATE
router.put("/:id", () => {});
//DELETE
router.delete("/:id", () => {});
//GET
router.get("/:id", () => {});
//GETALL
router.get("/", () => {});

export default router;
