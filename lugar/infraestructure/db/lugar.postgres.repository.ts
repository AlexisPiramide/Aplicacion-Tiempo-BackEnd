import executeQuery from '../../../context/postgres.connector';
import Lugar from '../../domain/lugar';
import LugarRepository from '../../domain/lugar.repository'

export default class lugarPostgresRepository implements LugarRepository{
    
    async getLugares(busqueda: any): Promise<Lugar[]> {
        const query = `SELECT * FROM lugar`;
        try {
            const rows: any[] = await executeQuery(query);
            const lugares: Lugar[] = rows.map((row) => {
                return {
                    municipio: row.municipio,
                    localidad: row.localidad,
                    codigo_postal: row.cpostal
                };
            });
            return lugares;
        }catch(error){
            throw new Error('Error en la base de datos');
        }
    }
  
    async agregarLugar(lugar: Lugar): Promise<Lugar> {
        const query = `INSERT INTO lugar (cpostal ,municipio, localidad) VALUES ('${lugar.codigo_postal}','${lugar.municipio}', '${lugar.localidad}') RETURNING *`;
    
        try {
            const rows: any[] = await executeQuery(query);
            const lugar: Lugar = {
                municipio: rows[0].municipio,
                localidad: rows[0].localidad,
            };

            return lugar;
        } catch (error) {
            throw new Error('Error en la base de datos');
        }
    }
    
}