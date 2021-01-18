'use strict';

/*

  1. Реализуйте класс Student (Студент), который будет наследовать от класса User.

  2. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).

  3. Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.

  4.Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.

  5. Текущий год получите самостоятельно.

*/

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
      throw new TypeError();
    }
    this._name = newName;
  }

  get surName() {
    return this._surName;
  }

  set surName(newSurName) {
    if(typeof newSurName !== 'string') {
      throw new TypeError();
    }
    this._surName = newSurName;
  }
  
  get fullName() {
    return `${this._name} ${this._surName}`;
  }

  set fullName(newFullName) {
    if(typeof newFullName !== 'string') {
      throw new TypeError();
    }
    const nameArray = newFullName.split(' ');
    if(nameArray.length !==  2) {
      throw new RangeError();
    }
    this._name = nameArray[0];
    this._surName = nameArray[1];
  }

}

class Student extends User{
  /**
   * 
   * @param {string} name 
   * @param {string} surName 
   * @param {number} year 
   */
  constructor(name, surName, year) {
    super(name, surName);
    this.year = year;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if(typeof newYear !== 'number' || isNaN(newYear)) {
      throw new TypeError();
    }
    if(CURRENT_YEAR <= newYear || MIN_ENTRY_YEAR > newYear) {
      throw new RangeError();
    }

    this._year = newYear;
  }

  getCourse() {
    if(this._year > CURRENT_YEAR) {
      throw new RangeError();
    }
    if(CURRENT_YEAR - this._year > 5) {
      return 5;
    }
    return CURRENT_YEAR - this._year;
  }

}

const user = new User('Mikhail', 'Testovich');
const student = new Student('Vladimir', 'Testovich', 2017);

console.log(user);
console.log(user.fullName);
console.log(student);
console.log(student.fullName);
console.log(student.getCourse());
