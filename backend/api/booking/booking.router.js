import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking } from "./booking.controller";

const router = require("express").Router();

router.post("/", createBooking);
router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.patch("/", updateBooking);
router.delete("/", deleteBooking);
