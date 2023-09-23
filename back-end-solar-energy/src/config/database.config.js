const { config } = require("dotenv");
config();
const Sequelize = require('sequelize');

module.exports = {
  dialect: 'postgres', 
  host: process.env.HOST,
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASE,
  port: process.env.PORT,
  define: {
    underscored: true,
    underscoredAll: true,
  },
};

