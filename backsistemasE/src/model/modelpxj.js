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
  const { nombre, descripcion, foto, preguntas } = req.body;

  const connection = await db;

  try {
    // Insert personaje
    const [newPersonaje] = await connection.query(
      "INSERT INTO personaje (nombre, descripcion, foto) VALUES (?, ?, ?)",
      [nombre, descripcion, foto]
    );
    const idPersonaje = newPersonaje.insertId;

    // Insert preguntas
    for (const pregunta of preguntas) {
      const { id_pregunta, respuesta } = pregunta;
      await connection.query(
        "INSERT INTO pregunta_x_personaje (id_personaje, id_pregunta, respuesta) VALUES (?, ?, ?)",
        [idPersonaje, id_pregunta, respuesta]
      );
    }

    // traerme las pxj del id persinaje
    const [createdPXJ] = await connection.query(
      "SELECT * FROM pregunta_x_personaje WHERE id_personaje = ?",
      [idPersonaje]
    );

    res.status(200).send({
      message: "Se crearon las preguntas_x_personaje correctamente",
      result: createdPXJ,
    });
  } catch (error) {
    res.status(500).send({ message: "Error en la solicitud" });
  }
};
