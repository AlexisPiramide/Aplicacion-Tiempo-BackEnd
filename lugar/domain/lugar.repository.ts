import Lugar from "./lugar";

export default interface lugarRepository{
    buscarLugar(codigo_postal: number): Promise<Lugar>;
    agregarLugar(lugar: Lugar): Promise<Lugar>;
}

