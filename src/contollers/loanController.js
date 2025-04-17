import { statusCode } from "../constants/statusCodes.js";
import CustomError from "../middleware/customErrorHandler.js";
import loanService from "../services/loanService.js";

const getLoanDataOfUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new CustomError("try Again", statusCode.FORBIDDEN);
    }
    const response = await loanService.getLoanDataOfUser(id);
    return res.status(statusCode.OK).json(response);
  } catch (error) {
    next(error);
  }
};

const addNewLoanData = async (req, res, next) => {
  try {
    const { userId, loanAmount, intrest, year, loanName } = req.body;

    if (!userId || !loanAmount || !intrest || !year || !loanName.trim()) {
      throw new CustomError("try Again", statusCode.FORBIDDEN);
    }
    const response = await loanService.addNewLoan(
      userId,
      parseInt(loanAmount),
      intrest,
      year,
      loanName
    );
    return res.status(statusCode.OK).json(response);
  } catch (error) {
    console.log(error);

    next(error);
  }
};

const getMonthlyRepaymentSchedule = async (req, res, next) => {
  try {
    const { loanAmount, intrest, years } = req.params;
    

    const sechduledData = await loanService.repaymentMonthlyGenerator(
      parseInt(loanAmount),
      parseInt(intrest),
      parseInt(years)
    );
    
    return res.status(statusCode.OK).json(sechduledData);
  } catch (error) {
    next(error);
  }
};

const loanConttroller = {
  getLoanDataOfUser,
  addNewLoanData,
  getMonthlyRepaymentSchedule,
};

export default loanConttroller;
