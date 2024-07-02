const express = require("express");
var cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    ////Middlewares //////////////////////////////////
    this.middleware();

    ///Rutas de mi aplicacion ///
    this.routes();
  }

  middleware() {
    //cors

    this.app.use(cors());
    //Directorio publico
    this.app.use(express.static("public"));

    // Lectura y parseo

    this.app.use(express.json());
  }

  //Metodo llamar las rutas
  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
