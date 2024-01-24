const pool = require('../../config/database');

module.exports = {
    createRoom: (data, callBack) => {
        pool.query(
            `insert into Room(RoomID, MaxMembers, Price, Description) 
            values(?,?,?,?)`,
            [
                data.RoomID,
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


    getAllRooms: callBack => {
        pool.query(
            `select * from Room`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getRoomById: (id, callBack) => {
        pool.query(
            `select * from Room where RoomID = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateRoom: (data, callBack) => {
        pool.query(
            `update Room set MaxMembers=?, Price=?, Description=? where RoomID=?`,
            [
                data.MaxMembers,
                data.Price,
                data.Description,
                data.RoomID
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    deleteRoom: (data, callBack) => {
        pool.query(
            `delete from Room where RoomID=?`,
            [data.RoomID],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }


}