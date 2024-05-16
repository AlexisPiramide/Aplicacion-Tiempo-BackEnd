import Lugar from "../../lugar/domain/lugar";
import Usuario from "../../usuario/domain/usuario";
import Tiempo from "./tiempo";

export default interface tiempoRepository{
    añadir(tiempo: Tiempo, usuario:Usuario, lugar: Lugar): Promise<Tiempo>;
    eliminar(tiempo: Tiempo,lugar: Lugar): Promise<boolean>;
    modificar(tiempo: Tiempo,lugar:Lugar): Promise<Tiempo>;

    buscarPorDia(dia: Date): Promise<Tiempo[]>;
    buscarPorLugar(lugar: Lugar): Promise<Tiempo[]>;

}