import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import dbConnect from "./src/mongo/mongoConnect.js";
import authRouter from "./src/router/auth.js";
import loanRouter from "./src/router/loanRouter.js";
import cookieParser from "cookie-parser";
import errorHandler from "./src/middleware/errorHandler.js";
import dotenv from "dotenv";

dotenvConfig();

const app = express();
dbConnect(process.env.MONGO_URL);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ORGIN,
    methods: "GET, PUT, POST, PATCH, OPTIONS, DELETE",
    allowedHeaders: ["Content-Type", "Authorization", "Cache-Control"],
    credentials: true,
  })
);


app.use("/auth", authRouter);
app.use("/loan", loanRouter);
app.use(errorHandler);

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
