

const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre ="No Name"} = req.query;

  res.json({
    msg: "get API - controlador ",
    q, nombre
  });
};



const usuarioPost = (req, res = response) => {

      const {nombre, edad } = req.body;

    res.json({
      msg: "post API - controlador ",
      nombre, edad
    });
  };

  const usuarioPut = (req, res = response) => {
     
    const id = req.params.id; 


    res.json({
      msg: "put API - controlador ",
      id
    });
  };

  const usuarioDelete = (req, res = response) => {
    res.json({
      msg: "delete API - controlador ",
    });
  };


module.exports = {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete
};
