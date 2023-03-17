class Direccion {
    constructor(
        public calle: string,
        public numero: number,
        public piso: number,
        public letra: string,
        public codigoPostal: number,
        public poblacion: string,
        public provincia: string
      ) {}
    
      public getDatos(): string {
        return `${this.calle}, ${this.numero}, ${this.piso}${this.letra}, ${this.codigoPostal}, ${this.poblacion}, ${this.provincia}`;
      }
    
}

export {Direccion};