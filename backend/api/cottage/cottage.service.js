const pool = require('../../config/database');

module.exports = {
    createResort: (data, callBack) => {
        pool.query(
            `insert into Cottage(CottageId, AirCondition, MaxMembers, Price, Description) 
            values(?,?,?,?,?)`,
            [
                data.CottageId,
                data.AirCondition,
                data.MaxMembers,
                data.Price,
                data.Description,
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAllResorts: callBack => {
        pool.query(
            `select * from Cottage`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getResortById: (id, callBack) => {
        pool.query(
            `select * from Cottage where CottageID = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error, null);
                }
                return callBack(null, results);
            }
        );
    },

    updateResort: (data, callBack) => {
        pool.query(
            `update Cottage set AC=?, Max Numbers=?, Price=?, Description=? where CottageID=?`,
            [
                data.AC,
                data.MaxNumbers,
                data.Price,
                data.Description,
                data.CottageID
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    deleteResort: (data, callBack) => {
        pool.query(
            `delete from Cottage where CottageID =  ?`,
            [data.CottageID],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }



}