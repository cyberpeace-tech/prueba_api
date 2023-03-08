const express = require("express");
const app = express();
require('dotenv').config();

/*-----CONFIGURACIÓN DE MORGAN---------*/
const morgan = require('morgan');
app.use(morgan('dev'));


//Configuración del servidor
app.use(express.urlencoded({extended:false})); //Le permite al servidor entender datos sencillos que vienen de formularios
app.use(express.json());//Le permite al ordenador entender formato json

const PORT = process.env.PORT || 3000;


app.listen( PORT, () => {
    console.log("Server running FAK")
});


//Mandar a traer rutas en constantes
const postsRouter = require("./routes/posts.router");

//Rutas que usa el servidor
app.use("/api/v1/posts", postsRouter);
