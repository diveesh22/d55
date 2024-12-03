const db = require('../config/db');

const getEnrollmentData = (req, res) => {
  const sql = 'SELECT * FROM Enrollment';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching enrollment data');
    } else {
      res.json(results);
    }
  });
};

module.exports = { getEnrollmentData };
