
    const express = require('express')
    const postdata = require('../controller/controller')

    // import {postdata} from "../controller/controller"  

    const router = express.Router();
    router.post("/post",postdata);
    // app.get("/get", namedata.findAll);
    // app.get("/find", namedata.findOne);

module.exports= router