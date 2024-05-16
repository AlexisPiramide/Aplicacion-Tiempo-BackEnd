import usuario from '../../domain/usuario';
import usuarioRepository from '../../domain/usuario.repository'

export default class usuarioPostgresRepository implements usuarioRepository{
    
    iniciarSesion(usuario: usuario): Promise<usuario> {
        throw new Error('Method not implemented.');
    }
    registro(usuario: usuario): Promise<usuario> {
        throw new Error('Method not implemented.');
    }
    
} 