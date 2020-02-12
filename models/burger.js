const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (table, cols, value, cb) => {
        orm.create("burgers", cols, value, res => {
            console.log("Creating in ORM");
            cb(res);
        });
    },
    update: (table, cols, value, id, cb) => {
        orm.update("burgers", cols, value, id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;

// const orm = require("../config/orm.js");

// const burger = {
//     all: function (cb) {
//         orm.all("burgers", function (res) {
//             cb(res);
//         });
//     },

//     create: function (cols, vals, cb) {
//         orm.create("burgers", cols, vals, function (res) {
//             cb(res);
//         });
//     },

//     update: function (col, value, condition, cb) {
//         orm.update("burgers", col, value, condition, function (res) {
//             cb(res);
//         })

//     }

// }

// module.exports = burger;