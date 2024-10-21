const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data from requests
app.use(express.json());

// In-memory array to store users
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// Route: Welcome message at the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

// Route: GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Route: POST a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  
  // Basic validation
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {
    id: users.length + 1, // Incremental ID
    name: name
  };

  users.push(newUser);
  res.status(201).json(newUser); // Respond with the new user
});

// Handle invalid routes (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
