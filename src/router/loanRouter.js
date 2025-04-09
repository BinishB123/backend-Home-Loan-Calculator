import Express from "express";
import loanConttroller from "../contollers/loanController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const loanRouter = Express.Router();

loanRouter.get(
  "/get-loan-data/:id",
  authMiddleware,
  loanConttroller.getLoanDataOfUser
);
loanRouter.patch(
  "/update-loan-data",
  authMiddleware,
  loanConttroller.updateLoanData
);
loanRouter.get(
  "/get-monthly-repayment-schedule/:loanAmount/:intrest/:years",
  authMiddleware,
  loanConttroller.getMonthlyRepaymentSchedule
);

export default loanRouter;
