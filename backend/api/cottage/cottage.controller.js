const {createResort, getAllResorts, getResortById, updateResort, deleteResort} = require("./cottage.service");
module.exports = {
    createResort: (req, res) => {
        const data = req.body;

        createResort(data, (err, results) => {
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

    getAllResorts: (req, res) => {
        getAllResorts((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getResortById: (req, res) => {
        const id = req.params.id;
        getResortById(id, (err, results) => {
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

    updateResort: (req, res) => {
        const body = req.body;
        updateResort(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update"
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },

    deleteResort: (req, res) => {
        const data = req.body;
        deleteResort(data, (err, results) => {
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
                message: "Cottage deleted successfully"
            });
        });
    }

    
};