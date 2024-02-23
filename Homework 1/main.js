// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
console.log(a)
let b ='owu';
console.log(b)
let c ='com';
console.log(c)
let d='ua';
console.log(d)

let n1= 1;
console.log(n1)
let n2= 10;
console.log(n2)
let n3= -999;
console.log(n3)
let n4= 123;
console.log(n4)
const PI= 3.14;
console.log(PI)
let n6= 2.7;
console.log(n6)
let n7= 16;
console.log(n7)

console.log(!!'lesson 1');
console.log(!!0);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName='Halyna';
let middleName='Vikhot';
let lastName='Mykolaivna';

let person=`${firstName} ${middleName} ${lastName}`;
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль