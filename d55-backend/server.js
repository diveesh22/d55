//  const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = 3000;
// const SECRET_KEY = 'your_secret_key'; // Replace with a secure key

// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// // Login endpoint
// app.post('/login', (req, res) => {
//     console.log('Request body:', req.body);
//     const { username, password } = req.body;
  
//     // Hardcoded credentials for testing
//     const hardcodedUsername = 'Diveesh';
//     const hardcodedPassword = 'Diveesh';
  
//     if (username === hardcodedUsername && password === hardcodedPassword) {
//       // Generate JWT token
//       const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
//       res.json({ success: true, token });
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }
//   });  

// // Middleware to verify JWT
// function authenticateToken(req, res, next) {
//     const token = req.headers['authorization'];
//     if (!token) return res.status(401).send('Access Denied');
  
//     jwt.verify(token, SECRET_KEY, (err, user) => {
//       if (err) return res.status(403).send('Invalid Token');
//       req.user = user;
//       next();
//     });
//   }

  
// app.get('/dashboard', authenticateToken, (req, res) => {
//     res.json({
//       summary: 'UNCC hosted a groundbreaking innovation event this month...',
//       source: 'https://example.com/uncc-latest-news'
//     });
//   });


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./config/db'); // Your database config
const enrollmentRoutes = require('./routes/enrollment');
const rankingsRoutes = require('./routes/rankings');
const researchRoutes = require('./routes/research');
const sportsRoutes = require('./routes/sports');
const bcrypt = require('bcrypt');

const app = express();
const SECRET_KEY = 'your_secret_key'; // Replace with a strong secret key

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access Denied: No Token Provided');
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send('Access Denied: Invalid Token');
    req.user = user; // Add user info to the request object
    next();
  });
};

// Authentication Endpoints
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).send('Invalid credentials');
    }

    const user = results[0];
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ success: true, token });
  });
});

// Registration route
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
  
    try {
      // Hash the password for security
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert user data into the 'users' table
      const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
      db.query(sql, [username, hashedPassword, email], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error saving user');
        } else {
          res.status(201).send('User registered successfully');
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error during registration');
    }
  });


// Protected Routes
app.use('/enrollment', authenticateToken, enrollmentRoutes);
app.use('/rankings', authenticateToken, rankingsRoutes);
app.use('/research', authenticateToken, researchRoutes);
app.use('/sports', authenticateToken, sportsRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
