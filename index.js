'use strict';

class User {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if(typeof newName !== 'string') {
      throw new TypeError('Unappropriate Type of Name!');
    }
    this._name = newName;
  }
  get surName() {
    return this._surName;
  }
  set surName(newSurName) {
    if(typeof newSurName !== 'string') {
      throw new TypeError('Unappropriate Type of Surname!');
    }
    this._surName = newSurName;
  }
  get fullName() {
    return `${this._name} ${this._surName}`;
  }
  set fullName(newFullName) {
    if(typeof newFullName !== 'string') {
      throw new TypeError('Unappropriate Type of Fullname!');
    }
    const [firstWord, secondWord] = newFullName.split(' ');
    if(nameArray.length !==  2) {
      throw new RangeError('Invalid Range!');
    }
    this._name = firstWord;
    this._surName = secondWord;
  }
}

class Student extends User{
  /**
   * 
   * @param {string} name 
   * @param {string} surName 
   * @param {object Data} yearOfEntry 
   */
  constructor(name, surName, yearOfEntry) {
    super(name, surName);
    this.yearOfEntry = yearOfEntry;
  }
  get yearOfEntry() {
    return this._yearOfEntry;
  }
  set yearOfEntry(newYearOfEntry) {
    if(!(newYearOfEntry instanceof Date)) {
      throw new TypeError('Unappropriate type of Data!');
    }
    if(newYearOfEntry > new Date() ||
    newYearOfEntry.getFullYear() <= (new Date().getFullYear() - 5)) {
      throw new RangeError('Invalid value. Year is out of the Range!');
    }
    this._yearOfEntry = newYearOfEntry;
  }
  getCourse() {
    const course = new Date().getFullYear() - this._yearOfEntry.getFullYear();
    return course + 1;
  }
}

const user = new User('Mike', 'Testovich');

const firstStudent = new Student('Jordan', 'Belfort', new Date(2017, 0, 1));
console.log(firstStudent);
console.log(firstStudent.getCourse());

const secondStudent = new Student('Helen', 'Parker', new Date(2021, 0, 1));
console.log(secondStudent);
console.log(secondStudent.getCourse());



