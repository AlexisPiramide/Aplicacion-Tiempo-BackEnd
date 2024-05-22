import lugar from "../domain/lugar";
import lugarRepository from "../domain/lugar.repository";

export default class lugarUsecases{
    constructor(private lugarRepository: lugarRepository) { }

    async getLugares(busqueda: any): Promise<lugar[]> {
        try {
            return this.lugarRepository.getLugares(busqueda);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}