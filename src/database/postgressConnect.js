import sequelize from "./postgress.js";

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("POSTGRES connected");
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

export default dbConnect;