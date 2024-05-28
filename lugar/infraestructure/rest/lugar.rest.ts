import express, { Request, Response } from "express";
import LugarUseCases from "../../application/lugar.usecases";
import LugarRepository from "../../domain/lugar.repository";
import LugarRepositoryPostgres from "../db/lugar.postgres.repository";
import Lugar from "../../domain/lugar";

const lugaresRepository: LugarRepository = new LugarRepositoryPostgres();

const lugaresUseCases: LugarUseCases = new LugarUseCases(
    lugaresRepository
);

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const lugares: Lugar[] = await lugaresUseCases.getLugares();
        res.json(lugares);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.post("/", async (req: Request, res: Response) => {
    const { municipio,codigo_postal,localidad } = req.body;
    
    const lugar: Lugar = {
      municipio,
      localidad,
      codigo_postal
    };

    try {
        const lugarCreado: Lugar = await lugaresUseCases.agregarLugar(lugar);
        res.json(lugarCreado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
