import Express from "express";
import authController from "../contollers/userAuth.js";
const authRouter = Express.Router();

authRouter.post("/signup", authController.addUser);
authRouter.post("/login", authController.login);
authRouter.delete("/logout", authController.logout);

export default authRouter;
