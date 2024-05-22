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

    const busqueda = req.params
    try {
        const lugares: Lugar[] = await lugaresUseCases.getLugares(busqueda);
        res.json(lugares);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
