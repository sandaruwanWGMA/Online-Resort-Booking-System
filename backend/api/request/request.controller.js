const {createReqest, getAllRequests } = require("./request.services");

module.exports = {
    createRequest: (req, res) => {
        const body = req.body;
        createReqest(body, (err, results) => {
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

    getAllRequests: (req, res) => {
        getAllRequests((err, results) => {
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
}
