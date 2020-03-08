const connection = require("./connection");

const orm = {
    all: (table, cb) => {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    create: (table, cols, value, cb) => {
        const queryString = `INSERT INTO ${table} (${cols}) VALUES (?);`;
        connection.query(queryString, value, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
  update: (table, col, value, id, cb) => {
        let queryString = `UPDATE ${table} SET ${col} = ? WHERE id = ?;`;
        connection.query(queryString, [value, id], (err, res) => {
            console.log(queryString);
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;