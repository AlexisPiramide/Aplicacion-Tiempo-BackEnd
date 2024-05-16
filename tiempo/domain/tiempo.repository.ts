import Tiempo from "./tiempo";

export default interface tiempoRepository{
    añadir(tiempo: Tiempo): Promise<Tiempo>;
    eliminar(tiempo: Tiempo): Promise<Tiempo>;
    modificar(tiempo: Tiempo): Promise<Tiempo>;

    buscarPorDia(dia: Date): Promise<Tiempo[]>;
    buscarPorLugar(codigo_postal: number): Promise<Tiempo[]>;

}