const pool = require('../../config/database');

module.exports = {
    createReview : (data, callBack) => {
        pool.query(
            `insert into Review(ReviewID, RequestRef, Rating, Content) 
            values(?,?,?,?)`,
            [
                data.ReviewID,
                data.RequestRef,
                data.Rating,
                data.Content,
            ],
                
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAllReviews: callBack => {
        pool.query(
            `select * from Review`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getReviewById: (id, callBack) => {
        pool.query(
            `select * from Review where ReviewID = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateReview: (data, callBack) => {
        pool.query(
            `update Review set Rating=?, Content=? where ReviewID=?`,
            [
                data.Rating,
                data.Content,
                data.ReviewID
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    deleteReview: (data, callBack) => {
        pool.query(
            `delete from Review where ReviewID=?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}



