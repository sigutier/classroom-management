/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [
  {
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }
];

const availableMaleNames = [
  "pepe",
  "juan",
  "victor",
  "Leo",
  "francisco",
  "carlos",
];
const availableFemaleNames = [
  "cecilia",
  "ana",
  "luisa",
  "silvia",
  "isabel",
  "virginia",
];
const availableGenders = ["male", "female"];

const availableActions = [
  "Cerrar applicacion",
  "Mostrar en formato de tabla todos los alumnos",
  "Mostrar por consola la cantidad de alumnos que hay en clase",
  "Mostrar por consola todos los nombres de los alumnos",
  "Eliminar el último alumno de la clase",
  "Eliminar un alumno aleatoriamente de la clase",
  "Mostrar por consola todos los datos de los alumnos que son chicas",
  "Mostrar por consola el número de chicos y chicas que hay en la clase",
  "Mostrar true o false por consola si todos los alumnos de la clase son chicas",
  "Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años",
  "Añadir un alumno nuevo con los siguientes datos",
  "Mostrar por consola el nombre de la persona más joven de la clase",
  "Mostrar por consola la edad media de todos los alumnos de la clase",
  "Mostrar por consola la edad media de las chicas de la clase",
  "Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas",
  "Ordenar el array de alumnos alfabéticamente según su nombre",
];

module.exports = {
  students,
  availableMaleNames,
  availableFemaleNames,
  availableGenders,
  availableActions,
};
