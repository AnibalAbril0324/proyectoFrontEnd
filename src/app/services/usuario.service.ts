import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "cabril", nombre: "anibal", apellido: "abril", sexo: "masculino"},
    {usuario: "ebenalcazar", nombre: "estefania", apellido: "benalcazar", sexo: "femenino"},
    {usuario: "fperez", nombre: "fernanda", apellido: "abril", sexo: "masculino"},
    {usuario: "ploja", nombre: "paola", apellido: "abril", sexo: "masculino"},
    {usuario: "oabril", nombre: "omar", apellido: "abril", sexo: "masculino"},
    {usuario: "jvallejo", nombre: "jennifer", apellido: "abril", sexo: "masculino"},
    {usuario: "tquito", nombre: "tomas", apellido: "abril", sexo: "femenino"},
    {usuario: "equito", nombre: "erika", apellido: "abril", sexo: "femenino"},
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
      this.listUsuarios.splice(index,1);
  }

  agrearUsuario(usuario: Usuario){
      this.listUsuarios.unshift(usuario);
  }
}
