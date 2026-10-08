// import { model, Schema } from "mongoose";

// const loanSchema = new Schema(
//   {
//     loanName: { type: String, required: true },
//     userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
//     loanAmount: { type: Number, required: true },
//     interestRate: { type: Number, required: true },
//     year: { type: Number, required: true },
//   },
//   { timestamps: true } 
// );

// const loanModel = model("loans", loanSchema);

// export default loanModel;

import { DataTypes } from "sequelize";
import sequelize from "../database/postgress.js";

const Loan = sequelize.define(
  "Loan",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },

    loanName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "loan_name",
    },

    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "user_id",
    },

    loanAmount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
      field: "loan_amount",
    },

    interestRate: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      field: "interest_rate",
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "loans",
    timestamps: true,
    underscored: true,
  }
);

export default Loan;