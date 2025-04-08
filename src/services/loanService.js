import CustomError from "../middleware/customErrorHandler.js";
import loanRepo from "../repository/loanRepo.js";
import emiCalculator from "../helper/emiCalculator.js";

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
        return { ...calculatedData, ...loanData};
    } catch (error) {
        throw new CustomError(error.message, error.statusCode);
    }
};

const updateLoanData = async(docId,fieldToChange,newData)=>{
    try {
        const update = await loanRepo.updateLoanData(docId,fieldToChange,newData)
        return update
    } catch (error) {
        throw new CustomError(error.message, error.statusCode);

    }
}

const loanService = {
    getLoanDataOfUser,
    updateLoanData
};

export default loanService;
