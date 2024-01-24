const pool = require("../../config/database");

module.exports = {
    createBooking: (data, callBack) => {
        pool.query(
            `INSERT INTO Booking (CottageID, RoomID, AirCondition, CheckIn, CheckOut)
             VALUES (?, ?, ?, ?, ?)`,
            [
                data.CottageID,
                data.RoomID,
                data.AirCondition,
                data.CheckIn,
                data.CheckOut,
            ],
            (error, results, fields) => {
                if (error) {
                    console.error("Error in createBooking query:", error);
                    return callBack(error);
                }
    
                console.log("Query executed successfully. Results:", results);
    
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
            `select * from Booking where Booking_Ref = ?`,
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
            `delete from Booking where cotageID=? and roomID=? and checkIn=? and checkOut=?`,
            [data.cotageID, data.roomID, data.checkIn, data.checkOut],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};