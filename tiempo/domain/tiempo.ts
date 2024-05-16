import Usuario from "../../usuario/domain/usuario";
import Lugar from "../../lugar/domain/lugar";

export default interface tiempo{
    dia: Date,
    temperatura_maxima: number,
    temperatura_minima: number,
    humedad_media: number,
    viento_maxima: number,
    viento_minima: number,
    probabilidad_precipitacion: number,
    usuario: Usuario,
    lugar: Lugar,
}