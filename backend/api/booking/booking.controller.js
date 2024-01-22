
module.exports = {
    createBooking: (data, callBack) => {
        const data = req.body;

        create(data, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        }
        );
    },
      

    getAllBookings: (req, res) => {
        getAll((err, results) => {
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
        getById(id, (err, results) => {
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
        update(body, (err, results) => {
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

