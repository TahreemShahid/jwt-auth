const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your_jwt_secret_key'; // In production, use env vars

app.use(cors());
app.use(bodyParser.json());

// In-memory user store (for demo)
const users = [
  {
    id: 1,
    username: 'testuser',
    password: bcrypt.hashSync('password123', 8), // hashed password
    name: 'Test User',
    email: 'testuser@example.com'
  }
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username, password }); // Debug log
  const user = users.find(u => u.username === username);
  console.log('User found:', user); // Debug log
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  // Generate JWT
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    req.user = user;
    next();
  });
}

// User details endpoint
app.get('/api/user', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ id: user.id, username: user.username, name: user.name, email: user.email });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 