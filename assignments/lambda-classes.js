// CODE here for your Lambda Classes

// Person

class Person {
  constructor (pAttrs) {
    this.name = pAttrs.name;
    this.age = pAttrs.age;
    this.location = pAttrs.location;
  }

  speak () {
    return `Hello, my name is ${this.name} and I am from ${location}.`
  }
}

// Instructor

class Instructor extends Person {
  constructor (iAttrs) {
    super (pAttrs);
    this.specialty = pAttrs.specialty;
    this.favLanguage = pAttrs.favLanguage;
    this.catchPhrase = pAttrs.catchPhrase;
  }

  demo (subject) {
    return `Today we are learning about ${subject}.`
  }

  grade () {
    return `${student.name} receives a perfect score on ${subject}!`
  }
}

// Student

class Student extends Person {
  constructor (sAttrs) {
    super (sAttrs);
    this.previousBackground = sAttrs.previousBackground;
    this.className = sAttrs.className;
    this.favSubjects = sAttrs.favSubjects;
  }

  listSubjects () {
    
  }
}

// Project Manager