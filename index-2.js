'use strict';
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

/*
 * Публічні властивості класу доступні на екземплярах
 * Публічні методи класу доступні на екземплярах
 * Приватні властивості доступні всередині класу, отримати доступ до них можна за допомогою публічних методів класу
 * Приватні методи доступні лише в медодах класа
 * Статичні властивості доступлі лише на самому класі
 * Статичні методи доступні лише на самому класі
 * Статичні приватні властивості доступні на самому класі, всередині класу
 * Статичні приватні методи доступні на самому класі, всередині методів класу
 */

class User {
  static #emailList = [];
  static getEmailList() {
    return User.#emailList;
  }

  static #isIncludes(email) {
    return User.#emailList.includes(email);
  }

  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
    const isIncludes = User.#isIncludes(email);
    if (isIncludes) {
      console.log('inncludes in DB');
      return;
    }
    User.#emailList.push(email);
  }
  getName() {
    return this.name;
  }

  #checkEmail(email) {
    return email.includes('@gmail.com');
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    const isValid = this.#checkEmail(newEmail);
    console.log('isValid', isValid);
    if (!isValid) {
      console.log(`${newEmail} is not valid!`);
      return;
    }
    this.#email = newEmail;
  }
}

const userInstance = new User({ name: 'Mango', email: 'mango@gmail.com' });

// console.log(userInstance.__proto__ === User.prototype);

// userInstance.email = 'newEmailMango@gmail.com';

// console.log(userInstance.email);

// console.log(User.getEmailList());
// console.log(userInstance.getName());

const userInstance2 = new User({ name: 'Kiwi', email: 'kiwi@gmail.com' });
// console.log(userInstance2);

class UserDeveloper extends User {
  constructor({ name, email, skill }) {
    super({ name, email });
    this.skill = skill;
  }
  getProces() {
    console.log('write code');
  }
}

const userInstanceDev = new UserDeveloper({
  name: 'Polly',
  email: 'polly@gmail.com',
  skill: 'react',
});
// console.log(userInstanceDev);
// userInstanceDev.getProces();
