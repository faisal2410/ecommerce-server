const express = require('express')
const router = express.Router();
const { sslcontrol }=require("../controllers/sslcommerz")

// middleware
const { authCheck } = require("../middlewares/auth");




router.use("/ssl-request", sslcontrol)

router.post("/ssl-payment-success", async (req, res, next) => {
    return res.status(200).json({
        data: req.body
    })
})
router.post("/ssl-payment-failure", async (req, res, next) => {
    return res.status(400).json({
        data: req.body
    })
})
router.post("/ssl-payment-cancel", async (req, res, next) => {
    return res.status(200).json({
        data: req.body
    })
})
router.post("/ssl-payment-ipn", async (req, res, next) => {
    return res.status(200).json({
        data: req.body
    })
})

module.exports = router;