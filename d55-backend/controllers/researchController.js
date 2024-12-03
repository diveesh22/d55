const db = require('../config/db');

const getResearchData = (req, res) => {
  const sql = 'SELECT * FROM Research';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching research data');
    } else {
      res.json(results);
    }
  });
};

module.exports = { getResearchData };
