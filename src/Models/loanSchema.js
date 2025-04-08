import { model, Schema } from "mongoose";

const loanSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  loanAmount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  year: { type: Number, required: true },
});

const loanModel = model("loans", loanSchema);

export default loanModel;
