import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';
// Crear datos persona
  const persona1 = new Persona(
    'Juan',
    'Gómez',
    33,
    '12345678A',
    new Date(1990, 1, 1),
    'azul',
    'hombre',
    [
      new Direccion('Calle Mayor', 1, 2, 'B', 28001, 'Madrid', 'Madrid')
    ],
    [
      new Mail('personal', 'juan@gmail.com')
    ],
    [
      new Telefono('casa', 911111111),
      new Telefono('trabajo', 922222222)
    ],
    ''
  );
  // Crear datos persona
  const persona2 = new Persona(
    'María',
    'López',
    25,
    '00000000A',
    new Date(1998, 1, 1),
    'verde',
    'mujer',
    [
      new Direccion('Calle Gran Vía', 2, 3, 'C', 28001, 'Madrid', 'Madrid')
    ],
    [
      new Mail('trabajo', 'maria@empresa.com')
    ],
    [
      new Telefono('móvil', 777777777),
      new Telefono('trabajo', 912345678)
    ],
    ''
  );
  // Crear datos persona
  const persona3 = new Persona(
    'Carlos',
    'Gómez',
    22,
    '111111111C',
    new Date(2000, 10, 10),
    'rojo',
    'hombre',
    [
      new Direccion('Calle Alcalá', 30, 1, 'A', 28001, 'Madrid', 'Madrid')
    ],
    [
      new Mail('personal', 'carlos@gmail.com'),
      new Mail('trabajo', 'carlos@empresa.com')
    ],
    [
      new Telefono('móvil', 666666666),
      new Telefono('trabajo', 985000000)
    ],
    ''
  )
  
 // Mostrar los 3 registros 
 console.log([persona1].map(p => p.getDatos()));
 console.log([persona2].map(p => p.getDatos()));
 console.log([persona3].map(p => p.getDatos()));
 
 // Modificar uno de los registros de persona
 function modificarDatos(dni: string, nuevaDireccion: Direccion, nuevoMail: Mail, nuevoTelefono: Telefono) {
    let personas = [persona1, persona2, persona3]
   const index = personas.findIndex(persona => persona.dni === dni);
   if (index !== -1) {
     const persona = personas[index];
     persona.addDireccion(nuevaDireccion);
     persona.addMail(nuevoMail);
     persona.addTelefono(nuevoTelefono);
     // Mostrar los registros de persona con los cambios realizados
     console.log(`Se modificaron los datos de la persona con DNI ${dni}`);
     console.log(persona);
   } else {
     console.log(`No se encontró una persona con DNI ${dni}`);
   }
 }
 modificarDatos( "12345678A", new Direccion("Calle Falsa",2,1, "A", 28009, 'Madrid', 'Madrid'), new Mail("Personal", "correo@ejemplo.com"), new Telefono("Móvil",123456789));
  
  // Mostrar los 3 registros
 console.log([persona1].map(p => p.getDatos()));
 console.log([persona2].map(p => p.getDatos()));
 console.log([persona3].map(p => p.getDatos()));