import TiempoRepository from '../../domain/tiempo.repository';
import Tiempo from '../../domain/tiempo';

export default class tiempoPostgresRepository implements TiempoRepository{
    añadir(tiempo: Tiempo): Promise<Tiempo> {
        throw new Error('Method not implemented.');
    }
    eliminar(tiempo: Tiempo): Promise<Tiempo> {
        throw new Error('Method not implemented.');
    }
    modificar(tiempo: Tiempo): Promise<Tiempo> {
        throw new Error('Method not implemented.');
    }
    buscarPorDia(dia: Date): Promise<Tiempo[]> {
        throw new Error('Method not implemented.');
    }
    buscarPorLugar(codigo_postal: number): Promise<Tiempo[]> {
        throw new Error('Method not implemented.');
    }

}