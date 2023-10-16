import { Router } from "express";
import comntrollerPreguntas from "../controller/pregunta.js";
import comntrollerPersonaje from "../controller/personaje.js";
import comntrollerJugador from "../controller/jugador.js";
import comntrollerPXJ from "../controller/preguntaxjugador.js";

const route = Router();

route.use("/pregunta", comntrollerPreguntas);
route.use("/personaje", comntrollerPersonaje);
route.use("/jugador", comntrollerJugador);
route.use("/preguntaxjugador", comntrollerPXJ);

export default route;
