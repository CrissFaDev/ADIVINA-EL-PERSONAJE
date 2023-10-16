import { Router } from "express";
import {
  GetPregunta,
  GetonePregunta,
  PostPregunta,
  Deletepregunta,
} from "../model/modelPregunta.js";

const comntrollerPreguntas = Router();

comntrollerPreguntas.get("/", GetPregunta);
comntrollerPreguntas.get("/:id", GetonePregunta);
comntrollerPreguntas.post("/", PostPregunta);
comntrollerPreguntas.delete("/:id", Deletepregunta);

export default comntrollerPreguntas;
