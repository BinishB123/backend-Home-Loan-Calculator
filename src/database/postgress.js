import { Sequelize } from "sequelize";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

console.log("POSTGRES_PASSWORD:", process.env.POSTGRES_PASSWORD);

const sequelize = new Sequelize(
  "loan_app", // database name
  "postgres", // username
  process.env.POSTGRES_PASSWORD+"", // PostgreSQL password
  {
    host: "localhost",
    port: 5433,
    dialect: "postgres",
    logging: console.log,
  },
);



export default sequelize;
  