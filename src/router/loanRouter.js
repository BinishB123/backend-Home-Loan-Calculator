import Express from "express";
import loanConttroller from "../contollers/loanController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const loanRouter = Express.Router();

loanRouter.get(
  "/get-loan-data/:id",
  authMiddleware,
  loanConttroller.getLoanDataOfUser
);
loanRouter.post(
  "/add-new-loan-data",
  authMiddleware,
  loanConttroller.addNewLoanData
);
loanRouter.get(
  "/get-monthly-repayment-schedule/:loanAmount/:intrest/:years",
  authMiddleware,
  loanConttroller.getMonthlyRepaymentSchedule
);

export default loanRouter;
