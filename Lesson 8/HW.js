// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email= email;
    this.phone = phone;
}
const addUsers = () => {
    const arrUsers = [];
    for (let i = 0; i < 10; i++) {
        arrUsers.push(new User(i + 1, 'ihor', 'romanov', 'romanov@gmail.com', '099998997'));
    }
    return arrUsers;
}

console.log(addUsers());
// ---------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterU = () => {
    return addUsers().filter(item => item.id % 2 === 0);
}
console.log(filterU())
//---------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sortU = ()=>{
    return addUsers().sort((a, b) => b.id - a.id);
}
// --------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
const Clients = [
new Client(1,'bohdan', 'bek', 'bekv@gmail.com' ,'09876543', 'one'),
new Client(2, 'petya', 'kav', 'kav@gmail.com', '09857746', 'two'),
new Client(3, 'stepan', 'rav', 'rav@gmail.com', '06752487', 'three'),
new Client(4,'liza', 'iva', 'iva@gmail.com', '09842456', 'four'),
new Client(5,'ura', 'birka', 'birka@gmail.com', '06357897', 'five'),
new Client(6,'ira', 'mav', 'mav@gmail.com', '097456784', 'six'),
new Client(7, 'lesya', 'dyk', 'dyka@gmail.com', '095357857', 'seven'),
new Client(8, 'olesya', 'mak', 'mak@gmail.com', '08446886', 'eight'),
new Client(9,'oleg', 'nak','nak@gmail.com', '057858959', 'nine'),
new Client(10, 'kolya', 'kon', 'kon@gmail.com', '056468995', 'ten'),
];

console.log(Clients);
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClients = (arr) => {
    return arr.sort((a, b) => a.order.length - b.order.length)
}
console.log(sortClients(Clients));
// --------------------------------------------------------------------------------------------------------------------

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, manufacturer, year, maxSpeed, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.driver = [];
//
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = () => {
//         console.log(`model - ${this.model}`);
//         console.log(`manufacturer - ${this.manufacturer}`);
//         console.log(`year - ${this.year}`);
//         console.log(`maxSpeed - ${this.maxSpeed}`);
//         console.log(`volume - ${this.volume}`);
//     }
//
//
//     this.increaseMaxSpeed = newSpeed => {
//         console.log(this.maxSpeed += newSpeed);
//     }
//
//     this.changeYear = newValue  => {
//         console.log(this.year = newValue);
//     }
//     this.addDriver = function (name, surname) {
//         this.driver.push(new Driver (name, surname));
//     }
// }
// function Driver (name, surname){
//     this.name = name;
//     this.surname= surname;
// }
//
// let car = new Car('Audi', 'AudiCentre', '2022', '200', '3.2');
// console.log(car)
// car.drive()
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2010);
// car.addDriver('Petya', 20)
// console.log(car);

// --------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, manufacturer, year, maxSpeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.driver = [];
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
// //
//     info() {
//         console.log(`model - ${this.model}`);
//         console.log(`manufacturer - ${this.manufacturer}`);
//         console.log(`year - ${this.year}`);
//         console.log(`maxSpeed - ${this.maxSpeed}`);
//         console.log(`volume- ${this.volume}`);
//     }
//
// //
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     }
//
// //
//     changeYear(newValue) {
//         console.log(this.year = newValue);
//     }
//
// //
//     addDriver(name, surname) {
//         this.driver.push(new Driver (name, surname))
//     }
// }
// let Car = new Cars ('BMW', "bmw", 2023, 300, 3.2);
// console.log(Car)
// Car.drive()
// Car.info()
// Car.increaseMaxSpeed(300)
// Car.changeYear(2012)
// Car.addDriver('vasya', 'vasilov')
// console.log(Car)

// --------------------------------------------------------------------------------------------------------------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let arrCinderella = [
    new Cinderella('Ira', '20','30'),
    new Cinderella('Olya','21','31'),
    new Cinderella('Maya','22','32'),
    new Cinderella('Liza','23','33'),
    new Cinderella('Lesya','24', '34'),
    new Cinderella('Olesya','25','35'),
    new Cinderella('Lera','26','36'),
    new Cinderella('Vika','27','37'),
    new Cinderella('Marta','28','38'),
    new Cinderella('Zorya','28','39'),
]
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Vasya', '25', '37');
console.log(arrCinderella.filter(item => item.footSize === prince.shoe));
