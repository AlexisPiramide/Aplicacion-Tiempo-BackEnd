import Usuario from '../../domain/usuario';
import UsuarioRepository from '../../domain/usuario.repository'
import executeQuery from '../../..//context/postgres.connector';
export default class usuarioPostgresRepository implements UsuarioRepository {

    async iniciarSesion(usuario: Usuario): Promise<Usuario> {
        const { email } = usuario;
        const query = `SELECT * FROM usuario WHERE email = '${email}'`;
        try {
            const rows: any[] = await executeQuery(query);
            if (rows.length === 0) {
                throw new Error("Usuario/contraseña no es correcto");
            } else {
                const usuarioDB: Usuario = {
                    alias: rows[0].alias,
                    email: rows[0].email,
                    password: rows[0].password,
                    nombre: rows[0].nombre,
                    apellidos: rows[0].apellidos,
                };
                return usuarioDB;
            }
        } catch (error) {
            throw new Error("Error al iniciar sesión");
        }

    }

    async registro(usuario: Usuario): Promise<Usuario> {
        const { alias, password, nombre, apellidos, email } = usuario;
        const query = `INSERT INTO usuario (alias, password, nombre, apellidos, email) VALUES ('${alias}', '${password}', '${nombre}', '${apellidos}', '${email}') returning *`;
        
        try {
            const rows: any[] = await executeQuery(query);
            const usuarioDB: Usuario = {
                alias: rows[0].alias,
                password: rows[0].password,
                nombre: rows[0].nombre,
                apellidos: rows[0].apellidos,
                email: rows[0].email,
            };
            return usuarioDB;
        } catch (error) {
            throw new Error("Error al registrar usuario");
        }
    }

} 