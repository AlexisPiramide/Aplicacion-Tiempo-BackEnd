import Lugar from '../../domain/lugar';
import LugarRepository from '../../domain/lugar.repository'

export default class lugarPostgresRepository implements LugarRepository{
  
    buscarLugar(codigo_postal: number): Promise<Lugar> {
        throw new Error('Method not implemented.');
    }
    agregarLugar(lugar: Lugar): Promise<Lugar> {
        throw new Error('Method not implemented.');
    }
    
}