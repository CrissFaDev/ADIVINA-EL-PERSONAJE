import db from "../config/db.js";

export const GetPregunta = async (req, res) => {
  const [pregunta] = await (await db).query("SELECT * FROM pregunta");
  res.status(200).send({
    message: "listado de todas las preguntas",
    resut: pregunta,
  });
};

export const GetonePregunta = async (req, res) => {
  const { id } = req.params;

  const [onepregunta] = await (
    await db
  ).query("SELECT * FROM pregunta where id_pregunta = ?", [id]);

  res.status(200).send({
    message: "listar una pregunta",
    result: onepregunta,
  });
};

export const PostPregunta = async (req, res) => {};

export const Deletepregunta = (req, res) => {
  res.send(" eliminar pregunta");
};
