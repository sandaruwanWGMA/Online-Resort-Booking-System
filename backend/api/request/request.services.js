const pool = require("../../config/database");

module.exports = {
    createReqest: (data, callBack) => {
        pool.query(
            `insert into Request( BookingRef, CustomerId, Confirmed) 
            values(?,?, false)`,
            [
           
                data.BookingRef,
                data.CustomerId,
                
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAllRequests: callBack => {
        pool.query(
            `select * from Request`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


}