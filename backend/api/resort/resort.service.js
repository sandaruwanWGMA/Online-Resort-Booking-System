const pool = require('../../config/database');

module.exports = {
    createResort: (data, callBack) => {
        pool.query(
            `insert into Cottage(CottageID, AC, Max Numbers, Price, Description('/' separated) 
            values(?,?,?,?,?)`,
            [
                data.CottageID,
                data.AC,
                data.Description,
                data.Price,
                data.Max_Numbers,
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
                    return callBack(error);
                }
                return callBack(null, results[0]);
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
            `delete from Cottage where CottageID=?`,
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