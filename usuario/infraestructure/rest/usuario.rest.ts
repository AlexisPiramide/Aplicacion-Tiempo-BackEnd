import express, { Request, Response } from "express";

import UsuarioUseCases from "../../application/usuario.usecases";

import UsuarioRepository from "../../domain/usuario.repository";

import UsuarioRepositoryPostgres from "../db/usuario.postgres.repository";
import Usuario from "../../domain/usuario";
import { createToken } from "../../../context/security/auth";

const usuariosRepository: UsuarioRepository = new UsuarioRepositoryPostgres();

const usuariosUseCases: UsuarioUseCases = new UsuarioUseCases(
  usuariosRepository
);

const router = express.Router();

router.post("/registro", async (req: Request, res: Response) => {
  const { alias, password, nombre,apellidos,email } = req.body;
  const usuarioAPI: Usuario = {
    alias,
    password,
    nombre,
    apellidos,
    email
  };

  try{
    const usuario: Usuario = await usuariosUseCases.registro(usuarioAPI);
    const token = createToken(usuario);
    res.json({ alias: usuario.alias,nombre:usuario.nombre,apellidos: usuario.apellidos,token: token });
  }
  catch(e){
    res.status(404).json({ mensaje: "Usuario ya existe" });
  }
 
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const usuarioAPI: Usuario = {
    email,
    password,
  };
  try{
   
  const usuario: Usuario = await usuariosUseCases.iniciarSesion(usuarioAPI);
  
  const token = createToken(usuario);
  res.json({ alias: usuario.alias,token: token,nombre:usuario.nombre,apellidos: usuario.apellidos});
  }
  catch(e){
    res.status(404).json({ mensaje: "Usuario/contraseña no es correcto" });
  }
 
});

export default router;