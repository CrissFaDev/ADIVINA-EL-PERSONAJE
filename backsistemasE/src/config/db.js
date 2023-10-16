import mysql2 from "mysql2/promise";

// Configura la conexión a la base de datos
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "adivinaperso",
});

// Ahora puedes utilizar la promesa creada por createConnection
// para manejar la conexión exitosa o los errores.

db.then(() => {
  console.log("Conexión a la base de datos exitosa");
  // Aquí puedes realizar consultas u otras operaciones en la base de datos
}).catch((error) => {
  console.error("Error al conectar a la base de datos:", error);
});

export default db;
