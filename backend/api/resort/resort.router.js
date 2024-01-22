
import { createResort, getAllResorts, getResortById, updateResort, deleteResort} from "./resort.controller";

const router = require("express").Router();


router.post("/", createResort);
router.get("/", getAllResorts);
router.get("/:id", getResortById);
router.patch("/", updateResort);
router.delete("/", deleteResort);