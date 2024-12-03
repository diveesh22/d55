const db = require('../config/db');

const getSportsData = (req, res) => {
//   const sql = 'SELECT * FROM Sports';
//   db.query(sql, (err, results) => {
//     if (err) {
//       res.status(500).send('Error fetching sports data');
//     } else {
//       res.json(results);
//     }
//   });
    console.log("sports controller called")
};

module.exports = { getSportsData };
