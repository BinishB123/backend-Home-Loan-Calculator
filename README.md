# Home Loan Repayment Scheduler  Backend

#  Repository Pattern Backend

## Overview

This backend service follows the **Repository Pattern**, promoting **clean separation of concerns**, **modularity**, and **scalability**. Built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**, 
---

## 📁 Folder Structure

backend/
│
├── index.js               
|           
│
└── src/
    ├── constants/      
    │
    ├── controllers/     
    │
    ├── helper/          
    │
    ├── middleware/      
    │
    ├── models/          
    │
    ├── mongo/           
    │
    ├── repository/      
    │
    ├── router/          
    │
    └── services/        



## Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### **Installation Steps**
 **Install dependencies:**
   ```sh
   npm install
   ```
   . **Create a `.env` file in the root  add the following:**
   ```ini
MOGO_URL = mongodb://localhost:27017/Home-loan-Calculator
PORT=3000
ORGIN= http://localhost:5173
ACCESSTOKENKEY = "your key"
   ```



    **Run the development server:**
   ```sh
   npm start
   ```
 The backend will be running at `http://localhost:3000` (or your configured port).


