import Express from 'express'
import loanConttroller from '../contollers/loanController.js'


const loanRouter = Express.Router()

loanRouter.get('/get-loan-data/:id',loanConttroller.getLoanDataOfUserController)



export default loanRouter