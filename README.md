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
This project is a simple RESTful API built using Node.js and Express.js. It serves as a basic demonstration of how to create a web server and handle API requests. The API allows users to retrieve a list of fictional users and add new users to the list.

Features
A welcome message when accessing the root URL (/)
GET endpoint to retrieve a list of users
POST endpoint to add a new user
Basic error handling for invalid requests
Technologies Used
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine
Express.js: Fast, unopinionated, minimalist web framework for Node.js
JavaScript: Programming language used to implement the API logic
Getting Started
Prerequisites
Make sure you have Node.js installed on your machine.

Installation
Clone this repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd simple_api
Install the required packages:
bash
Copy code
npm install express
Start the server:
bash
Copy code
node index.js
Open your browser and visit http://localhost:3000.
API Endpoints
1. GET /
Description: Returns a welcome message.
Response:
json
Copy code
"Welcome to the Simple API!"
2. GET /users
Description: Returns a list of users.
Response:
json
Copy code
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" },
  { "id": 3, "name": "Charlie" }
]
3. POST /users
Description: Adds a new user.
Request Body:
json
Copy code
{ "name": "New User" }
Response:
json
Copy code
{ "id": 4, "name": "New User" }
Error Handling
The API handles errors for invalid requests:

If the name field is missing in the POST request:
json
Copy code
{ "error": "Name is required" }
For any undefined routes, a 404 error will be returned:
json
Copy code
{ "error": "Route not found" }
Contributing
Contributions are welcome! Please feel free to submit a pull request or raise an issue if you find any bugs or have suggestions for improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.
