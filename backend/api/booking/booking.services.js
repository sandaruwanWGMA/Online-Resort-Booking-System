module.exports = {
    createBooking: (data, callBack) => {
        pool.query(
            `insert into Booking(BookingID, CheckIn, CheckOut, CottageID, CustomerID) 
            values(?,?,?,?,?)`,
            [
                data.BookingID,
                data.CheckIn,
                data.CheckOut,
                data.CottageID,
                data.CustomerID,
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAllBookings: callBack => {
        pool.query(
            `select * from Booking`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getBookingById: (id, callBack) => {
        pool.query(
            `select * from Booking where BookingID = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateBooking: (data, callBack) => {
        pool.query(
            `update Booking set CheckIn=?, CheckOut=?, CottageID=?, CustomerID=? where BookingID=?`,
            [
                data.CheckIn,
                data.CheckOut,
                data.CottageID,
                data.CustomerID,
                data.BookingID
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    deleteBooking: (data, callBack) => {
        pool.query(
            `delete from Booking where BookingID=?`,
            [data.BookingID],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};