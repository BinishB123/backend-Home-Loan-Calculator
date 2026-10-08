import User from "./userSchema.js";
import Loan from "./loanSchema.js";

User.hasMany(Loan, {
  foreignKey: "userId",
  as: "loans",
});

Loan.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

export { User, Loan };