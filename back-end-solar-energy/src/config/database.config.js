const { config } = require("dotenv");
config();
const Sequelize = require('sequelize');

module.exports = {
  dialect: 'postgres', // Altere para 'postgres' para o ElephantSQL
  host: process.env.HOST,
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASE,
  port: process.env.PORT,
  define: {
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Use esta opção para evitar erros de certificado quando estiver usando SSL com o ElephantSQL
    }
  }
};
