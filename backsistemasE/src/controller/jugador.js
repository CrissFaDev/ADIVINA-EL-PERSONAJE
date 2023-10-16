import { Router } from "express";
import {
  GetJugador,
  GetoneJugador,
  PostJugador,
  DeleteJugador,
} from "../model/modelJugador.js";

const comntrollerJugador = Router();

comntrollerJugador.get("/", GetJugador);
comntrollerJugador.get("/:id", GetoneJugador);
comntrollerJugador.post("/", PostJugador);
comntrollerJugador.delete("/:id", DeleteJugador);

export default comntrollerJugador;
