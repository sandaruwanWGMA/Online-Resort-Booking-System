const {createReview, getAllReviews, getReviewById, updateReview, deleteReview} = require('./review.services');



module.exports = {
    createReview: (req, res) => {
        const body = req.body;
        createReview(body, (err, results) => {
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

    getReviewById: (req, res) => {
        const id = req.params.id;
        
        getReviewById(id, (err, results) => {
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

    getAllReviews: (req, res) => {
        getAllReviews((err, results) => {
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



    updateReview: (req, res) => {
        const body = req.body;
        updateReview(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },

    deleteReview: (req, res) => {
        const data = req.body;
        deleteReview(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Review deleted successfully"
            });
        });
    },

    
}