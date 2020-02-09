const connection = require("../config/connection");
const orm = {
    all: (table, cb) => {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    create: (table, colName, value, cb) => {
        const queryString = `INSERT INTO ${table} (${colName})
        VALUES (${value});`;

        console.log(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    update: (table, colVal, condition, cb) => {
       
        const queryString = `UPDATE ${table} SET ${colVal} WHERE ${value} = ${condition};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    delete: (table, condition) => {
        const queryString = `DELETE FROM ${table} WHERE ${value} = ${condition};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;