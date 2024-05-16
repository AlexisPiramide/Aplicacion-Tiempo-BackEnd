import usuario from "./usuario";

export default interface usuarioRespository{
    iniciarSesion(usuario: usuario): Promise<usuario>;
    registro(usuario: usuario): Promise<usuario>; 
}