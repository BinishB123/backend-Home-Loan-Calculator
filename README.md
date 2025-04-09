Backend – Repository Architecture
This backend project follows the Repository Pattern, promoting clean separation of concerns, better scalability, and testability.

 Architecture Overview
Layer	Responsibility
Routes	Maps HTTP endpoints to corresponding controllers.
Controllers	Handles req/res and forwards data to services.
Services	Contains business logic; connects controllers and repositories.
Repositories	Handles all direct database operations (e.g., queries).
Models	Mongoose schemas defining data structure.
Middleware	Middleware functions like authentication, validation, etc.
Helpers	Reusable utility functions like JWT, hashing, etc.
Constants	Centralized configuration for status codes, messages, etc.
Mongo	Handles MongoDB database connection logic.
 Folder Structure

src/
├── constants/       # App-wide constants (status codes, messages)
├── controllers/     # Handles incoming requests and responses
├── helper/          # Utility functions (e.g., JWT, password hashing)
├── middleware/      # Express middleware (auth, error handling, etc.)
├── models/          # Mongoose schemas (User, Loan, etc.)
├── mongo/           # MongoDB connection configuration
├── repository/      # DB abstraction layer (fetch, update logic)
├── router/          # Route definitions and grouping
├── services/        # Business logic (validation, flow control)
├── app.js           # Express app setup
└── server.js        # Entry point of the server
🚀 Getting Started
1. Install Dependencies

npm install
2. Setup Environment Variables
Create a .env file in the root:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESSTOKENKEY=your_jwt_secret
3. Run the Server

npm run dev
🧪 Available Scripts
npm run dev – Start server in development mode using nodemon

npm start – Start server in production mode

