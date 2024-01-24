const {createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom} = require("./room.services");

module.exports = {
    createRoom: (req , res) => {
        const body = req.body;
        createRoom(body, (err, results) => {
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
        });
    },

    getAllRooms: (req, res) => {
        getAllRooms((err, results) => {
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

    getRoomById: (req, res) => {
        const id = req.params.id;
        getRoomById(id, (err, results) => {
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

    updateRoom: (req, res) => {
        const body = req.body;
        updateRoom(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update room"
                });
            }
            return res.json({
                success: 1,
                message: "Updated successfully"
            });
        });
    },

    deleteRoom: (req, res) => {
        const data = req.body;
        deleteRoom(data, (err, results) => {
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
                message: "Room deleted successfully"
            });
        });
    }
}

        