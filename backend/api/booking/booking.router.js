const { createBookingController, getAllBookings, getBookingById, updateBooking, deleteBooking } = require("./booking.controller");

const router = require("express").Router();

router.post("/", createBookingController);
router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.patch("/", updateBooking);
router.delete("/", deleteBooking);

module.exports = router