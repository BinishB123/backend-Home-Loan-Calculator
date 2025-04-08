import { statusCode } from "../constants/statusCodes.js";
import CustomError from "../middleware/customErrorHandler.js";
import loanService from "../services/loanService.js";

const getLoanDataOfUserController = async (req, res, next) => {
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

const loanConttroller = {
  getLoanDataOfUserController,
};

export default loanConttroller;
