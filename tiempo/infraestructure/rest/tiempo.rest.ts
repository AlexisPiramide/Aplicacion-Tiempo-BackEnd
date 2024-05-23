import express, { Request, Response } from "express";
import TiempoUseCases from "../../application/tiempo.usecases";
import TiempoRepository from "../../domain/tiempo.repository";
import TiempoRepositoryPostgres from "../db/tiempo.postgres.repository";
import Tiempo from "../../domain/tiempo";
import { isAuth } from "../../../context/security/auth";

const tiempoRepository: TiempoRepository = new TiempoRepositoryPostgres();

const tiempoUseCases: TiempoUseCases = new TiempoUseCases(
    tiempoRepository
);
const router = express.Router();

router.get("/nuevo",isAuth, async (req: Request, res: Response) => {
    const tiempo = req.body;
    const lugar = req.body;
    const usuario = req.body;
    try {
        const nuevoTiempo = await tiempoUseCases.añadir(tiempo, usuario, lugar);
        res.json(nuevoTiempo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});

router.delete("/eliminar",isAuth, async (req: Request, res: Response) => {
    const tiempo = req.body;
    const lugar = req.body;
    try {
        const eliminado = await tiempoUseCases.eliminar(tiempo, lugar);
        res.json(eliminado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});

router.put("/modificar",isAuth, async (req: Request, res: Response) => {
    const tiempo = req.body;
    const lugar = req.body;
    try {
        const modificado = await tiempoUseCases.modificar(tiempo, lugar);
        res.json(modificado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});


router.get("/buscar", async (req: Request, res: Response) => {
    const busqueda = req.body;
    try {
        const tiempos = await tiempoUseCases.buscarPorLugar(busqueda);
        res.json(tiempos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
