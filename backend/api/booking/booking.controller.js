const {createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking} = require("./booking.services");


module.exports = {
    createBooking: (data, res) => {
        const body = data.body;
    
        createBooking(body, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    
      

    getAllBookings: (req, res) => {
        getAllBookings((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getBookingById: (req, res) => {
        const id = req.params.id;
        getBookingById(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    updateBooking: (req, res) => {
        const body = req.body;
        updateBooking(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }

            if(!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update booking"
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },

    deleteBooking: (req, res) => {
        const data = req.body;
        deleteBooking(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {

                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                message: "Booking deleted successfully"
            });
        });
    }

}

