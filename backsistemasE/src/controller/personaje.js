import { Router } from "express";
import {
  GetPersonaje,
  GetonePersonaje,
  PostPersonaje,
  DeletePersonaje,
} from "../model/modelPersonaje.js";

const comntrollerPersonaje = Router();

comntrollerPersonaje.get("/", GetPersonaje);
comntrollerPersonaje.get("/:id", GetonePersonaje);
comntrollerPersonaje.post("/", PostPersonaje);
comntrollerPersonaje.delete("/:id", DeletePersonaje);

export default comntrollerPersonaje;
