import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routerlugar from "./lugar/infraestructure/rest/lugar.rest";
import routertiempo from "./tiempo/infraestructure/rest/tiempo.rest";
import routerusuario from "./usuario/infraestructure/rest/usuario.rest";
dotenv.config();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:5173","https://front:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(express.json());
app.use(cors(options));

app.use("/api/lugares", routerlugar);
app.use("/api/tiempo", routertiempo);
app.use("/api/usuario", routerusuario);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});