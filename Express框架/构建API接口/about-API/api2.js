const express = require("express");
const api = express.Router();

api.get("/timezone",(req,res)=>{
    res.send("api2 res for /timezone");
});

module.exports = api;