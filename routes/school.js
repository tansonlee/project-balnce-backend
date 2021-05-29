import express from "express";

import { getAllSchools, createSchool, deleteSchool, updateSchool } from "../controllers/index.js";

const router = express.Router();

router.get("/", getAllSchools);
router.post("/", createSchool);
router.delete("/:id", deleteSchool);
router.patch("/", updateSchool);

export default router;
