const orm = require("../config/orm");

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (colName, value) => {
        orm.create("burgers", colName, value, (res) => {
            cb(res);
        });
    },
    update: (colVal, value, condition) => {
        orm.update("burgers", colVal, value, condition, (res) => {
            cb(res);
        });
    },
    delete: (value, condition) => {
        orm.delete("burgers", value, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;