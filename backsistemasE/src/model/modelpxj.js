import db from "../config/db.js";

export const GetPXJ = async (req, res) => {
  const [personaje] = await (
    await db
  ).query("SELECT * FROM pregunta_x_personaje");

  res.status(200).send({
    message: "todos las  pregunta_x_personaje",
    result: personaje,
  });
};

export const GetonePXJ = async (req, res) => {
  const { id_pregunta, respuesta } = req.query;
  console.log(id_pregunta, respuesta);

  const [onejugador] = await (
    await db
  ).query(
    `SELECT id_personaje FROM pregunta_x_personaje where id_pregunta =? and respuesta = ?;`,
    [id_pregunta, respuesta]
  );
  res.status(200).send({
    message: `id de jugadores que en la pregunta ${id_pregunta} respuesta ${respuesta}`,
    result: onejugador,
  });
};

export const postPXJ = async (req, res) => {
  const { id_personaje, id_pregunta, respuesta } = req.body;
  //console.log(id_personaje, id_pregunta, respuesta);

  const [pxj] = await (
    await db
  ).query(
    `INSERT INTO pregunta_x_personaje (id_personaje, id_pregunta, respuesta) 
    VALUES (?, ?, ?);`,
    [id_personaje, id_pregunta, respuesta]
  );

  const idpxj = pxj.insertId;

  const [pregunta_x_personaje] = await (
    await db
  ).query("SELECT * FROM pregunta_x_personaje where id_pxp = ?", [idpxj]);

  res.status(200).send({
    message: `se creo correctamente la pregunta_x_personaje pregunta  `,
    result: pregunta_x_personaje,
  });
};
