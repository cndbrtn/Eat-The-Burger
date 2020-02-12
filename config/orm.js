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
    // update: (table, cols, value, id, cb) => {
       
    //     const queryString = `UPDATE ${table} SET ${cols}=${value} WHERE id=${id};`;
    //     connection.query(queryString, (err, res) => {
    //         if (err) throw err;
    //         cb(res);
    //     })
    // }
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

// const connection = require("./connection.js");

// const orm = {

//     all: function (table, cb) {
//         let queryString = "SELECT * FROM " + table + ";";
//         connection.query(queryString, (err, res) => {
//             if (err) throw err;
//             cb(res);
//         });
//     },
//     create: function (table, cols, vals, cb) {
//         let queryString = "INSERT INTO ??(??) VALUES (?);";
//         connection.query(queryString, [table, cols, vals], (err, res) => {
//             if (err) throw err;
//             console.log(queryString);
//             cb(res);
//         })

//     },
//     update: function (table, col, value, id, cb) {
//         let queryString = "UPDATE ?? SET ??=? WHERE id = ?;";
//         connection.query(queryString, [table, col, value, id], (err, res) => {
//             console.log(queryString);
//             if (err) throw err;
//             cb(res);
//         })
//     }
// };

// module.exports = orm;