import TiempoRepository from '../../domain/tiempo.repository';
import Tiempo from '../../domain/tiempo';
import Lugar from '../../../lugar/domain/lugar';
import Usuario from '../../../usuario/domain/usuario';
import executeQuery from '../../../context/postgres.connector';

export default class tiempoPostgresRepository implements TiempoRepository{

    async añadir(tiempo: Tiempo, usuario:Usuario, lugar: Lugar ): Promise<Tiempo> {
        const { dia,temperatura_maxima,temperatura_minima,humedad_media,viento_maxima,viento_minima, probabilidad_precipitacion} = tiempo;

        const query = `INSERT INTO tiempo (dia, temperatura_maxima, temperatura_minima, humedad_media, viento_maxima, viento_minima, probabilidad_precipitacion, usuario, municipio,localidad) 
        VALUES (${dia},${temperatura_maxima},${temperatura_minima},${humedad_media},${viento_maxima},${viento_minima},${probabilidad_precipitacion},${usuario},${lugar.municipio},${lugar.localidad}) returning *`;

        try {
            const rows: any[] = await executeQuery(query);
            
            const lugarDB: Lugar = {
                municipio: rows[0].municipio,
                localidad: rows[0].localidad,
            };

            const tiempoDB: Tiempo = {
                dia: rows[0].dia,
                temperatura_maxima: rows[0].temperatura_maxima,
                temperatura_minima: rows[0].temperatura_minima,
                humedad_media: rows[0].humedad_media,
                viento_maxima: rows[0].viento_maxima,
                viento_minima: rows[0].viento_minima,
                probabilidad_precipitacion: rows[0].probabilidad_precipitacion,
                lugar: lugarDB
            };

            return tiempoDB;
        }catch(error){
            throw new Error('Error en la base de datos');
        }
    }
    async eliminar(tiempo: Tiempo,lugar: Lugar): Promise<boolean> {
        const { dia } = tiempo;

        const query = `DELETE FROM tiempo WHERE dia = ${dia} AND municipio = ${lugar.municipio} AND localidad = ${lugar.localidad}`;

        try {
            const rows: any[] = await executeQuery(query);
            return true;
        }catch(error){
            throw new Error('Error en la base de datos');
        }
    }

    async modificar(tiempo: Tiempo,lugar:Lugar): Promise<Tiempo> {
        const { dia,temperatura_maxima,temperatura_minima,humedad_media,viento_maxima,viento_minima, probabilidad_precipitacion} = tiempo;
        const query = `UPDATE tiempo SET temperatura_maxima = ${temperatura_maxima}, temperatura_minima = ${temperatura_minima}, humedad_media = ${humedad_media}, viento_maxima = ${viento_maxima}, viento_minima = ${viento_minima}, probabilidad_precipitacion = ${probabilidad_precipitacion} WHERE dia = ${dia} AND municipio = ${lugar.municipio} AND localidad = ${lugar.localidad} returning *`;
        
        try{
            const rows: any[] = await executeQuery(query);
            
            const lugarDB: Lugar = {
                municipio: rows[0].municipio,
                localidad: rows[0].localidad,
            };

            const tiempoDB: Tiempo = {
                dia: rows[0].dia,
                temperatura_maxima: rows[0].temperatura_maxima,
                temperatura_minima: rows[0].temperatura_minima,
                humedad_media: rows[0].humedad_media,
                viento_maxima: rows[0].viento_maxima,
                viento_minima: rows[0].viento_minima,
                probabilidad_precipitacion: rows[0].probabilidad_precipitacion,
                lugar: lugarDB
            };

            return tiempoDB;
        }catch(error){
            throw new Error('Error en la base de datos');
        }
    }
    async buscarPorDia(dia: Date): Promise<Tiempo[]> {
        throw new Error('Method not implemented.');
    }
    async buscarPorLugar(Lugar: Lugar): Promise<Tiempo[]> {
        throw new Error('Method not implemented.');
    }

}