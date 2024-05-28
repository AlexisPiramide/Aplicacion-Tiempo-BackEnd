import Lugar from "./lugar";

export default interface lugarRepository{
    agregarLugar(lugar: Lugar): Promise<Lugar>;
    getLugares(): Promise<Lugar[]>;
}

