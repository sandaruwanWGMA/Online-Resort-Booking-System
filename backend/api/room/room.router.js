const {createRoom, getRoomById, getAllRooms, updateRoom, deleteRoom} = require("./room.controller");



const router = require("express").Router();


router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.patch("/", updateRoom);
router.delete("/", deleteRoom);

module.exports = router