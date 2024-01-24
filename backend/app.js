const express = require("express");

const app = express();

//importing the routers from the api folder
const cottageRouter = require("./api/cottage/cottage.router");
const bookingRouter = require("./api/booking/booking.router");
const roomRouter = require("./api/room/room.router");
const reviewRouter = require("./api/review/review.router");

// middleware
app.use(express.json());
app.use("/api/cottage", cottageRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/room", roomRouter);
app.use("/api/review", reviewRouter);

app.listen(8080, () => {
    console.log("Server up and running");
}
);

