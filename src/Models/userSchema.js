// import { model, Schema } from "mongoose";

// const useSchema = new Schema({
//   name: { type: String, required: true },
//   mobile: { type: Number, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });

// const userModel = model("users", useSchema);

// export default userModel;
import { DataTypes } from "sequelize";
import sequelize from "../database/postgress.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    underscored: true,
  }
);

export default User;