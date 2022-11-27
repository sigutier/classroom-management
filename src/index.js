const readline = require("readline");
const { students, availableActions } = require("./data");
const {
  computeRandomIntBetween,
  createNewRandomStudent,
  prompt,
} = require("./utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    availableActions.forEach((value, index) =>
      console.log(`${index} - ${value}`)
    );
    while (true) {
      const requisito = await prompt(
        "\nIntroduce el número del requisito que quieres ejecutar: ",
        rl
      );
      let numRequisito = parseInt(requisito);
      if (isNaN(numRequisito)) {
        throw new Error("Invalid number");
      }
      switch (numRequisito) {
        case 1:
          console.table(students);
          break;
        case 2:
          console.log(students.length);
          break;
        case 3:
          students.forEach((student) => {
            console.log(student.name);
          });
          break;
        case 4:
          students.pop();
          break;
        case 5:
          const randomIndex =
            students[Math.floor(Math.random() * students.length)];
          students.splice(randomIndex, 1);
          break;
        case 6:
          const femaleStudents = students.filter(
            (student) => student.gender === "female"
          );
          console.log(femaleStudents);
          break;
        case 7:
          const numMaleStudents = students.filter(
            (student) => student.gender === "male"
          );
          console.log(numMaleStudents.length);
          const numFemaleStudents = students.filter(
            (student) => student.gender === "female"
          );
          console.log(numFemaleStudents.length);
          break;
        case 8:
          const everyFemaleStudents = students.every(
            (student) => student.gender === "female"
          );
          console.log(everyFemaleStudents);
          break;
        case 9:
          students.forEach((student) => {
            if (student.age >= 20 && student.age <= 25) {
              console.log(student.name);
            }
          });
          break;
        case 10:
          const newStudent = createNewRandomStudent();
          students.push(newStudent);
          break;
        case 11:
          let ageYounger = students[0].age;
          let nameYounger = students[0].name;
          for (let i = 1; i < students.length; i++) {
            if (students[i].age < ageYounger) {
              ageYounger = students[i].age;
              nameYounger = students[i].name;
            }
          }
          console.log(nameYounger);
          break;
        case 12:
          const sumAge = students.reduce(
            (acc, student) => acc + student.age,
            0
          );
          const averageAge = sumAge / students.length;
          console.log(averageAge);
          break;
        case 13:
          const femaleStudents13 = students.filter(
            (student) => student.gender === "female"
          );
          const sumAgeFemale = femaleStudents13.reduce(
            (acc, student) => acc + student.age,
            0
          );
          const averageAgeFemale = sumAgeFemale / femaleStudents13.length;
          console.log(averageAgeFemale);
          break;
        case 14:
          students.forEach((student) => {
            const randomScores = computeRandomIntBetween(0, 10);
            student.examScores.push(randomScores);
          });
          break;
        case 15:
          students.sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            else return 0;
          });
          break;
        default:
          throw new Error("...End of session...");
      }
    }
  } catch (e) {
    console.log(e.message);
    rl.close();
  }
}

// When done reading prompt, exit program
rl.on("close", () => process.exit(0));

main();
