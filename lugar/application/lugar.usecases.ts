import lugar from "../domain/lugar";
import lugarRepository from "../domain/lugar.repository";

export default class lugarUsecases{
    constructor(private lugarRepository: lugarRepository) { }

    async getLugares(): Promise<lugar[]> {
        try {
            return this.lugarRepository.getLugares();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async agregarLugar(lugar: lugar): Promise<lugar> {
        try {
            return this.lugarRepository.agregarLugar(lugar);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}