function getAge(person) {
  let age = person.yearOfDeath - person.yearOfBirth;
  if (!person.yearOfDeath) {
    age = new Date().getFullYear() - person.yearOfBirth;
  }
  return age
}

const findTheOldest = function(people) {
  return people.reduce( (oldest, curPerson) => {
    let curAge = getAge(curPerson)
    oldest = getAge(oldest) > curAge ? oldest : curPerson;
    return oldest;
  } )
};

// Do not edit below this line
module.exports = findTheOldest;
