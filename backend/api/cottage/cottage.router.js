
const { createResort, getAllResorts, getResortById, updateResort, deleteResort} = require("./cottage.controller");

const router = require("express").Router();


router.post("/", createResort);
router.get("/", getAllResorts);
router.get("/:id", getResortById);
router.patch("/", updateResort);
router.delete("/", deleteResort);

module.exports =router