const {createReview, getReviewById, updateReview, deleteReview, getAllReviews} = require("./review.controller");

const router = require("express").Router();


router.post("/", createReview);
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.patch("/", updateReview);
router.delete("/", deleteReview);

module.exports = router
