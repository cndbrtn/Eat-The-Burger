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