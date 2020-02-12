const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        let burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create("burgers", "name", req.body.name, result => {
        res.json(result);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;
    console.log(`burgercontroller.js says: ${id}`);

    burger.update("burgers", "eaten", 1, id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const burger = require("../models/burger.js");

// router.get("/", (req, res) => {
//     burger.all((data) => {
//         let burgObj = {
//             burgers: data
//         };
//         console.log(burgObj);
//         res.render("index", burgObj);
//     });
// });

// router.post("/api/burgers", (req, res) => {
//     burger.create("name", req.body.name, (result) => {
//         console.log(req.body.name)
//         res.json({ id: result.insertId });
//     });
// });

// router.put("/api/burgers/:id", (req, res) => {
//     // const id = req.params.id;
//     console.log(req.params.id)

//     burger.update("eaten", true, req.params.id, (result) => {
//         res.status(200).end();
//     });
// });

// module.exports = router;