import express from "express";
import cors from "cors";
import route from "./routes/routes.js";

const app = express();
const port = 3000;

//cors
app.use(cors());

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`servidos listening on port  ${port}`);
});
