Backend Documentation
This is the backend server for [fitness-tracker]. It provides RESTful APIs to interact with a MongoDB database.

Table of Contents
Setup
Prerequisites
Installation
Usage
Starting the Server
API Endpoints
Configuration
Environment Variables
Configuration Files
Dependencies
License
Setup
Prerequisites
Before running the backend server, ensure you have the following installed:

Node.js (version 14.x or higher)
npm (Node Package Manager)
MongoDB (Make sure MongoDB server is running locally or accessible)
Installation
Clone the repository:

bash
Copiar código
git clone https://github.com/Anjsvf/WorkoutTracker-backend
Navigate into the backend directory:

bash
Copiar código
cd backend
Install dependencies:

bash
Copiar código
npm install
Usage
Starting the Server
To start the backend server in development mode (with nodemon for auto-reloading):

bash
Copiar código
npm run dev
To start the backend server in production mode:

bash
Copiar código
npm start
API Endpoints
The following endpoints are available:

GET /api/users: Fetch all users
POST /api/users: Create a new user
GET /api/users/:id: Fetch a user by ID
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID
Replace /api/users with your actual endpoint paths as per your application's requirements.

Configuration
Environment Variables
Create a .env file in the root directory of the backend with the following environment variables:

plaintext
Copiar código
MONGO_URL=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
NODE_ENV=development
Adjust MONGO_URL, JWT_SECRET, and NODE_ENV as necessary for your environment.

Configuration Files
The configuration files are located in the config directory. Ensure you have default.json and production.json files with appropriate configurations for development and production environments.

Example config/default.json:

json
Copiar código
{
  "mongoURI": "mongodb://localhost:27017/your-database",
  "jwtSecret": "your-secret-key"
}
Example config/production.json:

json
Copiar código
{
  "mongoURI": "mongodb+srv://username:password@cluster-name.mongodb.net/your-database?retryWrites=true&w=majority",
  "jwtSecret": "your-secret-key"
}
Dependencies
Express
mongoose
dotenv
nodemon (development dependency)
License
MIT - Open-source license

 