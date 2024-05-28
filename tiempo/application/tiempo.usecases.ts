import Lugar from "../../lugar/domain/lugar";
import Tiempo from "../domain/tiempo";
import tiempoRepository from "../domain/tiempo.repository";

export default class tiempoUseCases{
    constructor(private tiempoRepository: tiempoRepository) { }

    async añadir(tiempo: any, usuario: any, lugar: any): Promise<Tiempo> {
        try {
            return this.tiempoRepository.añadir(tiempo, usuario, lugar);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async eliminar(tiempo: any, lugar: any): Promise<boolean> {
        try {
            return this.tiempoRepository.eliminar(tiempo, lugar);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async modificar(tiempo: any, lugar: any): Promise<Tiempo> {
        try {
            return this.tiempoRepository.modificar(tiempo, lugar);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async buscarPorLugar(lugar: Lugar): Promise<Tiempo[]> {
        try {
            return this.tiempoRepository.buscarPorLugar(lugar);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }



}