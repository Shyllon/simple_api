const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// In-memory users array
let users = [
  { id: 1, name: 'Afolabi' },
  { id: 2, name: 'Shyllon' },
  { id: 3, name: 'Great' }
];

app.locals.users = users; // for easy access in tests

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

app.get('/users', (req, res) => {
  res.json(app.locals.users);
});


// POST /users: Add a new user
app.post('/users', (req, res) => {
    const { name } = req.body;
  
    // Basic validation for the name
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
  
    // Check for duplicate names
    const existingUser = users.find(user => user.name === name);
    if (existingUser) {
      return res.status(409).json({ error: 'User with this name already exists' });
    }
  
    // Add the new user
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    return res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = app.locals.users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = app.locals.users.splice(index, 1)[0];
  res.json(deletedUser);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
