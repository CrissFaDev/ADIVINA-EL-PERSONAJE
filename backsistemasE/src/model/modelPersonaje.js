import db from "../config/db.js";

export const GetPersonaje = async (req, res) => {
  const [personaje] = await (await db).query("SELECT * FROM personaje");

  res.status(200).send({
    message: "todos los personajes",
    result: personaje,
  });
};

export const GetonePersonaje = async (req, res) => {
  const { id } = req.params;

  const [onepersonaje] = await (
    await db
  ).query(`SELECT * FROM personaje WHERE id_personaje = ?`, [id]);
  res.status(200).send({
    message: "un personaje ok",
    res: onepersonaje,
  });
};

export const PostPersonaje = (req, res) => {
  res.send(" crear personaje");
};

export const DeletePersonaje = (req, res) => {
  res.send(" delete personaje");
};
