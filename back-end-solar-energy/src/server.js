const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const morganBody = require("morgan-body");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");
const { config } = require("dotenv");

config();

// classe server
class Server {
  // constructor de classe
  constructor(app = express()) {
    this.middlewares(app);
    this.routes(app);
    this.database();
    this.initializeServer(app);
  }
  // middlewares
  async middlewares(app) {
    const corsOptions = {
      origin: "https://semana-8.vercel.app",
      optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(morgan("dev")); // Mova esta linha para cima
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
  // connect database
  async database() {
    const connection = require("./database/connection");
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error("Não foi possível conectar com o banco de dados:", error);
    }
  }
  // routes
  async routes(app) {
    const appRoutes = require("./routes");
    app.use(appRoutes);
  }
  // start server
  async initializeServer(app) {
    const PORT = 3000
    const HOST = "localhost"
    app.listen(PORT, () =>
      console.log(`Servidor rodando em http://${HOST}:${PORT}`)
    );
  }
}

module.exports = Server;
