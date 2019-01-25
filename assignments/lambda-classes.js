// CODE here for your Lambda Classes

// Person

class Person {
  constructor (pAttrs) {
    this.name = pAttrs.name;
    this.age = pAttrs.age;
    this.location = pAttrs.location;
  }

  speak () {
    return `Hello, my name is ${this.name} and I am from ${this.location}.`;
  }
}

// Instructor - needs: name, age, location, specialty, favLanguage, catchPhrase

class Instructor extends Person {
  constructor (iAttrs) {
    super (iAttrs);
    this.specialty = iAttrs.specialty;
    this.favLanguage = iAttrs.favLanguage;
    this.catchPhrase = iAttrs.catchPhrase;
  }

  demo (subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade (student, subject) {
    return `${student.name} receives a perfect score on ${subject}!`;
  }
}

// Student - needs: name, age, location, previousBackground, className, favSubjects

class Student extends Person {
  constructor (sAttrs) {
    super (sAttrs);
    this.previousBackground = sAttrs.previousBackground;
    this.className = sAttrs.className;
    this.favSubjects = sAttrs.favSubjects;
    // stretch
    this.grade = sAttrs.grade;
  }

  listSubjects () {
    return `${this.name} enjoys ` + this.favSubjects + `.`;
  }

  prAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge (subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`;
  }
}

// Project Manager - needs: name, age, location, gradClassName, favInstructor

class ProjectManager extends Instructor {
  constructor (pmAttrs) {
    super (pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }

  standup (channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode (student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

// create an Instructor - needs: name, age, location, specialty, favLanguage, catchPhrase

const indiana = new Instructor ({
  name: "Indiana Jones",
  age: 35,
  location: "Princeton, New Jersey",
  specialty: "Archeology",
  favLanguage: "Ancient Sumerian",
  catchPhrase: "I hate snakes!"
});

// create a Student - needs: name, age, location, previousBackground, className, favSubjects

const shortRound = new Student ({
  name: "Short Round",
  age: 11,
  location: "Shanghai, China",
  previousBackground: "taxi driver",
  className: "FSW17",
  favSubjects: "Javascript, Treasure Hunting",
  grade: 95,
});

// create a Project Manager - needs: name, age, location, gradClassName, favInstructor

const willie = new ProjectManager ({
  name: "Willie Scott",
  age: 29,
  location: "Missouri",
  specialty: "singing",
  favLanguage: "English",
  catchPhrase: "INDYYYYY!",
  gradClassName: "CS2",
  favInstructor: indiana
});

// test results

// objects created successfully?

console.log(indiana);
console.log(shortRound);
console.log(willie);

// Person methods

indiana.speak(); //?
shortRound.speak(); //?
willie.speak(); //?

// Instructor methods
indiana.demo("Archeology"); //?
indiana.grade(shortRound, "Archeology"); //?

// Student methods

shortRound.listSubjects(); //?
shortRound.prAssignment("Javascript"); //?
shortRound.sprintChallenge("Javascript"); //?

// Project Manager methods

willie.standup("#web17_willie"); //?
willie.debugsCode(shortRound, "Javascipt"); //?

// Stretch Goal

