import db from "../config/db.js";

export const GetJugador = async (req, res) => {
  const [personaje] = await (await db).query("SELECT * FROM jugador");

  res.status(200).json({
    message: "todos los jugadores",
    result: personaje,
  });
};

export const GetoneJugador = async (req, res) => {
  const { id } = req.params;

  const [onejugador] = await (
    await db
  ).query(`SELECT * FROM jugador WHERE id_jugador = ?`, [id]);
  res.status(200).json({
    message: "un jugador ok",
    result: onejugador,
  });
};

export const PostJugador = async (req, res) => {
  const { nombre } = req.body;
  const [jugador] = await (
    await db
  ).query(`INSERT INTO jugador (nombre) VALUES (?)`, [nombre]);

  const idjugador = jugador.insertId;
  //console.log(idjugador);

  const [jugadorcreado] = await (
    await db
  ).query(`select * from jugador where id_jugador = ?`, [idjugador]);

  res.status(201).send({
    message: `jugador creado ${idjugador}`,
    result: jugadorcreado,
  });
};

export const DeleteJugador = (req, res) => {
  res.send(" delete jugador");
};
