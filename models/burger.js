const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (value, cb) => {
        orm.create("burgers", "name", value, (res) => {
            cb(res);
        });
    },
    update: (cols, value, id, cb) => {
        orm.update("burgers", "eaten", value, id, (res) => {
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