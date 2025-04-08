import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import dbConnect from "./src/mongo/mongoConnect.js";
import authRouter from './src/router/auth.js'
import loanRouter from "./src/router/loanRouter.js";
dotenvConfig();
const app = express();
dbConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin:process.env.ORGIN,
    methods: "GET, PUT, POST, PATCH, OPTIONS, DELETE",
    allowedHeaders: ["Content-Type", "Authorization", "Cache-Control"],
    credentials: true, 
  })
);

app.use((req, res, next) => {
  console.log(req.method);
  next();
});


app.use("/auth", authRouter);
app.use('/loan',loanRouter)







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
