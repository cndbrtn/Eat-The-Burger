const express = require("express");

const router = express.Router();

let burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all(function(data) {
        let burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create("name", req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
 let id = req.params.id;

    burger.update(["eaten"],[true], id, (result) => {
        res.status(200).end();
    });
});

module.exports = router;