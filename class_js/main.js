class Animal {
    // Конструктор, который инициализирует имя и возраст животного
    constructor(name, age) {
      this.name = name; // имя животного
      this.age = age;   // возраст животного
    }
  
    // Метод, который возвращает описание животного
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  
    // Метод для издаваемого звука (для всех животных можно оставить общим)
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age); // Вызов конструктора родительского класса
      this.breed = breed; // Порода собаки
    }
  
    // Переопределение метода makeSound для собаки
    makeSound() {
      console.log(`${this.name} barks! Woof!`);
    }
  
    // Метод для описания породы собаки
    describeBreed() {
      return `${this.name} is a ${this.breed}.`;
    }
  }

  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age); // Вызов конструктора родительского класса
      this.color = color; // Цвет шерсти кота
    }
  
    // Переопределение метода makeSound для кота
    makeSound() {
      console.log(`${this.name} meows! Meow!`);
    }
  
    // Метод для описания цвета кота
    describeColor() {
      return `${this.name} has a beautiful ${this.color} color.`;
    }
  }

  class Bird extends Animal {
    constructor(name, age, species) {
      super(name, age); // Вызов конструктора родительского класса
      this.species = species; // Вид птицы
    }
  
    // Переопределение метода makeSound для птицы
    makeSound() {
      console.log(`${this.name} chirps! Chirp!`);
    }
  
    // Метод для описания вида птицы
    describeSpecies() {
      return `${this.name} is a ${this.species}.`;
    }
  }

let dog = new Dog('Sharik', 3, 'Golden Retriever');
let cat = new Cat('Vasya', 2, 'gray');
let bird = new Bird('Petya', 1, 'Canary');

console.log(dog.describe());
dog.makeSound();

console.log(cat.describe());
cat.makeSound();

console.log(bird.describe());
bird.makeSound();
