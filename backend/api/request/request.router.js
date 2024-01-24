const { createRequest, getAllRequests } = require("./request.controller");

const router = require("express").Router();

router.post("/", createRequest);
router.get("/", getAllRequests);


module.exports =router