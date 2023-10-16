import { Router } from "express";
import { GetPXJ, GetonePXJ, postPXJ } from "../model/modelpxj.js";

const comntrollerPXJ = Router();

comntrollerPXJ.get("/", GetPXJ);
comntrollerPXJ.get("/pe", GetonePXJ);
comntrollerPXJ.post("/", postPXJ);

export default comntrollerPXJ;
