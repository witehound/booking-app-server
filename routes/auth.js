import express from "express";

const router = express.Router();

//CREATE
router.post("/register", () => {});
//SIGNIN
router.post("/login", () => {});
//DELETE
router.delete("/:id", () => {});
//GET
router.get("/:id", () => {});
//GETALL
router.get("/", () => {});

export default router;
