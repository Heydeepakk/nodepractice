
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

  const getdata= (req, res) => {
    const sql = 'SELECT * FROM names'
    
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
module.exports = getdata;


const deletedata = (req, res) => {
    const {id} = req.body.id;

    let sql = "DELETE FROM names WHERE id = ?";
    const values= [
        [id]
    ]

    connection.query(sql,[values], (err, result) => {
        if (err) throw err;
        res.send('data khtm');
    });
};
module.exports = deletedata;

