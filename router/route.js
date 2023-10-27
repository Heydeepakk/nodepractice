
    const express = require('express')
    const postdata = require('../controller/controller')
    const getdata = require('../controller/controller')
    const deletedata = require('../controller/controller')

    const router = express.Router();
    router.post("/post",postdata);
    router.get("/get", getdata);
    router.delete("/delete", deletedata);

module.exports= router