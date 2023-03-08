const express = require("express");
//const { create } = require("../controller/posts.controller");
const router = express.Router();
const postsController = require("../controller/posts.controller");

router.get("/", postsController.getAll);
router.get("/:id",postsController.getById); //Esta linea la dejaba en el index.js del servidor y donde se configuran las rutas
router.post("/",postsController.create);
router.put("/:id",postsController.update);
router.delete("/:id",postsController.delete);



module.exports = router;