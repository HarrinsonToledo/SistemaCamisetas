import express, { request, response } from "express";
import { getRoles } from "../controllers/usuario.controller.js"

const personaRoutes = express.Router();

personaRoutes.use((request, response, next) => {
    //console.log(request.ip);
    next();
});

personaRoutes.get('/roles', (request, response) => {
    getRoles(request, response);
});

export default personaRoutes;