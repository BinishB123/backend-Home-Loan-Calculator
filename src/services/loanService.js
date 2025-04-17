import CustomError from "../middleware/customErrorHandler.js";
import loanRepo from "../repository/loanRepo.js";
import emiCalculator from "../helper/emiCalculator.js";
import generateSchedule from "../helper/repaymentGenerateScheduler.js";

const getLoanDataOfUser = async (userId) => {
  try {
    const loanData = await loanRepo.getlatestAddedLoan(userId);
    const calculatedData = emiCalculator(
      100000,
      1,
      1
    );
    return { ...calculatedData, latestloanData :loanData };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const addNewLoan = async (userId, loanAmount, intrest, year,  loanName) => {
  try {
     await loanRepo.addNewLoan(
      userId,
      loanAmount,
      intrest,
      year,
       loanName
    );
    const loanData = loanRepo.getlatestAddedLoan(userId)
    return loanData
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const repaymentMonthlyGenerator = async (loanAmount, intrest, years) => {
  try {
    const scheduledData = generateSchedule(loanAmount, intrest, years);
    return scheduledData;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const loanService = {
  getLoanDataOfUser,
  addNewLoan,
  repaymentMonthlyGenerator,
};

export default loanService;
