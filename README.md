Simple API with Node.js and Express

Table of Contents

Project Overview

Features

Technologies Used

Getting Started

API Endpoints

Error Handling

Contributing

License

Project Overview
This is a simple RESTful API built using Node.js and Express.js. It demonstrates how to create a basic web server and handle HTTP requests. The API allows users to retrieve and add fictional users.

Features
A welcome message at the root URL (/)

GET endpoint to retrieve a list of users

POST endpoint to add a new user

Basic error handling for invalid requests and undefined routes

Technologies Used
Node.js – JavaScript runtime built on Chrome's V8 engine

Express.js – Minimalist web framework for Node.js

JavaScript – Programming language used for API logic

Getting Started

Prerequisites

Ensure Node.js is installed on your machine

Installation

1. Clone this repository:

git clone https://github.com/Shyllon/simple_api.git

2. Navigate to the project directory:

cd simple_api

3. Install dependencies:

npm install

4. Start the server:

npm start

5. Visit http://localhost:3000 in your browser.

You can also run tests using:

npm test

API Endpoints

1. GET /
Description: Returns a welcome message
Response:

"Welcome to the Simple API!"

2. GET /users
Description: Returns a list of users
Response:

[
  { "id": 1, "name": "Afolabi" },
  { "id": 2, "name": "Shyllon" },
  { "id": 3, "name": "Great" }
]

3. POST /users
Description: Adds a new user
Request Body:

{ "name": "New User" }
Response:

{ "id": 4, "name": "New User" }

Error Handling
If name is missing in POST /users:

{ "error": "Name is required" }

For undefined routes:

{ "error": "Route not found" }

Contributing
Contributions are welcome! Please submit a pull request or open an issue for bugs and suggestions.

License
This project is licensed under the MIT License. See the LICENSE file for details.