const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
    return oldestAge < currentAge ? person : oldest;
  });
};

function getAge(birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
