import express, { request, response } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import personaRoutes from "./routes/persona.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use("/persona",personaRoutes)

app.listen(port, () => {
    console.log("Servidor Backend en linea PORT: " + port);
});