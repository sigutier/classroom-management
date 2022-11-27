const {
  availableMaleNames,
  availableFemaleNames,
  availableGenders,
} = require("./data");

/**
 * Compute a random number between min and max inclusive.
 * @param {number} min 
 * @param {number} max 
 * @returns {number} random number between min and max inclusive
 */
function computeRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a new random student object
 * @returns a new random student object
 */
function createNewRandomStudent() {
  let randomName;
  const randomGender =
    availableGenders[Math.floor(Math.random() * availableGenders.length)];
  if (randomGender === "male") {
    randomName =
      availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
  } else {
    randomName =
      availableFemaleNames[
        Math.floor(Math.random() * availableFemaleNames.length)
      ];
  }
  const newStudent = {
    age: computeRandomIntBetween(20, 50),
    examScores: [],
    gender: randomGender,
    name: randomName,
  };
  return newStudent;
}

/**
 * Prompt a question in the terminal and returns the answer
 * @param {string} question 
 * @param {*} readline object 
 * @returns {Promise<string>}
 */
function prompt(question, rl) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

module.exports = {
  createNewRandomStudent,
  computeRandomIntBetween,
  prompt
};
