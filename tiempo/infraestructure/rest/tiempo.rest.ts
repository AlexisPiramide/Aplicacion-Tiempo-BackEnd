import express, { Request, Response } from "express";
import TiempoUseCases from "../../application/tiempo.usecases";
import TiempoRepository from "../../domain/tiempo.repository";
import TiempoRepositoryPostgres from "../db/tiempo.postgres.repository";
import Tiempo from "../../domain/tiempo";
import { isAuth } from "../../../context/security/auth";
import lugar from "../../../lugar/domain/lugar";

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
        res.status(500).json({ error: "Internal Server Error" });
    }

});

router.delete("/eliminar",isAuth, async (req: Request, res: Response) => {
    const tiempo = req.body;
    const lugar = req.body;
    try {
        const eliminado = await tiempoUseCases.eliminar(tiempo, lugar);
        res.json(eliminado);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

});

router.put("/modificar",isAuth, async (req: Request, res: Response) => {
    const tiempo = req.body;
    const lugar = req.body;
    try {
        const modificado = await tiempoUseCases.modificar(tiempo, lugar);
        res.json(modificado);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }

});


router.post("/buscar", async (req: Request, res: Response) => {
    const { municipio, localidad } = req.body;
    const Lugar: lugar = {
        municipio,
        localidad
    };
    try {
        const tiempos = await tiempoUseCases.buscarPorLugar(Lugar);
        console.log(tiempos);
        res.json(tiempos);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
