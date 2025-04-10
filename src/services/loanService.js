import CustomError from "../middleware/customErrorHandler.js";
import loanRepo from "../repository/loanRepo.js";
import emiCalculator from "../helper/emiCalculator.js";
import generateSchedule from "../helper/repaymentGenerateScheduler.js";

const getLoanDataOfUser = async (userId) => {
  try {
    const loanDataExist = await loanRepo.loanExistWithUserId(userId);
    if (!loanDataExist) {
      await loanRepo.defaultLoanCreate(userId);
    }
    const loanData = await loanRepo.fetchLoanDataWithUserId(userId);
    const calculatedData = emiCalculator(
      loanData.loanAmount,
      loanData.interestRate,
      loanData.year
    );
    return { ...calculatedData, ...loanData };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const updateLoanData = async (userId, loanAmount, intrest, year) => {
  try {
    const update = await loanRepo.updateLoanData(
      userId,
      loanAmount,
      intrest,
      year
    );
    return update;
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
  updateLoanData,
  repaymentMonthlyGenerator,
};

export default loanService;
