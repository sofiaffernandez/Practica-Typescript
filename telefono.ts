class Telefono {
    constructor(public tipo: string, public numero: number) {}
  
    public getDatos(): string {
      return `${this.tipo}: ${this.numero}`;
    }
  }
  
  export { Telefono };