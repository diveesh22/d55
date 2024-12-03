const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_Diveesh',
  password: 'DWw8ax2yTgdnF8*',
  database: 'freedb_d55-db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = db;
