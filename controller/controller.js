
const connection = require("../database/db");



   const postdata = (req, res) => {
    const { firstname, lastname, phone } = req.body;

    let sql="INSERT INTO names (firstname, lastname, phone) VALUES ?"

    const values = [
        [firstname, lastname, phone]
    ];
    connection.query(sql, [values], (err, result) => {
        if (err) throw err;
        res.send('Data inserted successfully');
    });
  };
  module.exports =postdata;

// app.get('/api', (req, res) => {
//     const sql = 'SELECT * FROM names'
    
//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

// app.post('/create', (req, res) => {
//     const { firstname, lastname, phone } = req.body;

//     const sql = 'INSERT INTO names (firstname, lastname, phone) VALUES ?';
//     const values = [
//         [firstname, lastname, phone]
//     ];

//     connection.query(sql, [values], (err, result) => {
//         if (err) throw err;
//         res.send('Data inserted successfully');
//     });
// });
