const connection = require("./connection.js");

const orm = {
    
    all: function(table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO ??(??) VALUES (?);";
        connection.query(queryString, [table, cols, vals], (err, res) => {
            if (err) throw err;
            console.log(queryString);
            cb(res);
        })

    },
    update: function(table, col, value, id, cb) {
        let queryString = "UPDATE ?? SET ??=? WHERE id = ?;";
        connection.query(queryString, [table, col, value, id], (err, res) => {
            console.log(queryString);
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;