import Usuario from "../../usuario/domain/usuario";
import Lugar from "../../lugar/domain/lugar";

export default interface tiempo{
    dia: Date,
    hora: Date,
    temperatura: number,
    humedad: number,
    viento: number,
    direccion_viento: string,
    usuario: Usuario,
    codigo_postal: Lugar,
}