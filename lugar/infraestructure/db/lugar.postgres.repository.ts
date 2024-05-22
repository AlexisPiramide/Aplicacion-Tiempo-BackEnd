import executeQuery from '../../../context/postgres.connector';
import Lugar from '../../domain/lugar';
import LugarRepository from '../../domain/lugar.repository'

export default class lugarPostgresRepository implements LugarRepository{
    
    async getLugares(busqueda: any): Promise<Lugar[]> {
        const query = `SELECT * FROM lugar WHERE localidad = ${busqueda}`;
        try {
            const rows: any[] = await executeQuery(query);
            const lugares: Lugar[] = rows.map((row) => {
                return {
                    municipio: row.municipio,
                    localidad: row.localidad,
                };
            });
            return lugares;
        }catch(error){
            throw new Error('Error en la base de datos');
        }
    }
  
    buscarLugar(codigo_postal: number): Promise<Lugar> {
        throw new Error('Method not implemented.');
    }
    agregarLugar(lugar: Lugar): Promise<Lugar> {
        throw new Error('Method not implemented.');
    }
    
}