const db = require('../config/db');

const getRankingsData = (req, res) => {
  const sql = 'SELECT * FROM Rankings';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching rankings data');
    } else {
      res.json(results);
    }
  });
};

module.exports = { getRankingsData };
