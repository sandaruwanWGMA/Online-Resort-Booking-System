const express = require("express");

const app = express();
const resortRouter = require("./api/resort/resort.router");
const bookingRouter = require("./api/booking/booking.router");


app.use(express.json());
app.use("/api/resort", resortRouter);
app.use("/api/booking", bookingRouter);


app.listen(3000, () => {
    console.log("Server up and running");
}
);