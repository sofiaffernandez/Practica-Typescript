class Mail {
    constructor(public tipo: string, public direccion: string) {}
  
    public getDatos(): string {
      return `${this.tipo}: ${this.direccion}`;
    }
  }
  
  export { Mail };