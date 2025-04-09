 Backend (Repository Architecture) –



 This backend uses the Repository Pattern, which promotes a clean separation of concerns:

Layer	Role
Routes (router/)	Maps endpoints to controllers
Controllers (controllers/)	Handles req/res and forwards to services
Services (services/)	Contains business logic, interacts with repositories
Repositories (repository/)	Direct interaction with database (e.g., queries)
Models (models/)	MongoDB schemas using Mongoose
Middleware (middleware/)	Handles tasks like auth, logging, validation
Helpers (helper/)	Reusable utility functions (e.g., token generation)
Constants (constants/)	Centralized configuration for status codes/messages
Mongo (mongo/)	DB connection logic



FOLDER STRUCTURE 

src/
│
├── constants/       # App-wide constants (status codes, messages)
├── controllers/     # Handles incoming requests and responses
├── helper/          # Utility functions (e.g., JWT, hashing)
├── middleware/      # Express middleware (auth, error handler)
├── models/          # Mongoose schemas (User, Loan, etc.)
├── mongo/           # MongoDB connection configuration
├── repository/      # DB abstraction layer (fetch, update logic)
├── router/          # Route definitions and grouping
├── services/        # Business logic (validation, flow control)



