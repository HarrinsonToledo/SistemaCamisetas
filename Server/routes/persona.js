import express, { request, response } from "express";
import dataBase from '../dataBase.js';

const personaRoutes = express.Router();

personaRoutes.use((request, response, next) => {
    console.log(request.ip);

    next();
});

personaRoutes.get('/', (request, response) => {
    dataBase.getData(request, response);
});

export default personaRoutes;