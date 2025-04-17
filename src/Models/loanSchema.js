import { model, Schema } from "mongoose";

const loanSchema = new Schema(
  {
    loanName: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    loanAmount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  { timestamps: true } 
);

const loanModel = model("loans", loanSchema);

export default loanModel;
