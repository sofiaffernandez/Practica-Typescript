import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: Date;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: Date,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  public addDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  public addMail(mail: Mail) {
    this.mails.push(mail);
  }

  public addTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }
// Obtener dirección
  public getDireccionPrincipal() {
      return this.direcciones[0].toString();
  }
// Obtener todos los mails
  public getMails() {
    let mailsStr = "";
    this.mails.forEach((mail) => {
      mailsStr += `${mail.tipo}: ${mail.direccion}\n`;
    });
    return mailsStr;
  }
// Obtener telefono
  public getTelefonos() {
    let telefonosStr = "";
    this.telefonos.forEach((telefono) =>{
      telefonosStr += `${telefono.tipo}: ${telefono.numero}\n`;
    });
    return telefonosStr;
  }
  // Obtener todos los datos de una persona
  public getDatos(): string {
    const datosDireccion = this.direcciones.map(d => d.getDatos()).join('\n');
    const datosMails = this.mails.map(m => m.getDatos()).join('\n');
    const datosTelefonos = this.telefonos.map(t => t.getDatos()).join('\n');

    const datosPersona = `
      Nombre: ${this.nombre}
      Apellidos: ${this.apellidos}
      Edad: ${this.edad}
      DNI: ${this.dni}
      Fecha de nacimiento: ${this.cumpleanos.toLocaleDateString()}
      Color favorito: ${this.colorFavorito}
      Sexo: ${this.sexo}
      Direcciones: ${datosDireccion}
      Mails: ${datosMails}
      Teléfonos:${datosTelefonos}
      Notas: ${this.notas}
    `;

    return datosPersona;
  }

}