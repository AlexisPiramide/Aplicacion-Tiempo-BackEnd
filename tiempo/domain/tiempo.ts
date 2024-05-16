import usuario from "./usuario";
import lugar from "./lugar";

export default interface tiempo{
    dia: Date,
    hora: Date,
    temperatura: number,
    humedad: number,
    viento: number,
    direccion_viento: string,
    usuario: usuario,
    codigo_postal: lugar,
}