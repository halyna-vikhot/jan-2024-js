// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr;
arr=[123, 555, 777, 789,true, false, 244, 355, 999, 12345];
console.log(arr)

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
let book1={}
console.log(book1);
book1.title = 'Kobzar';
book1.pageCount = 115;
book1.genre ='poetry';

let book2={}
console.log(book2);
book2.title = 'Lisova pisnya';
book2.pageCount = 630;
book2.genre = 'poetry';

let book3={}
console.log(book3);
book3.title = 'Three hundred poetry';
book3.pageCount= 150;
book3.genre='poetry';
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book1 = {};
console.log(book1);
book1.title = 'Kobzar';
book1.pageCount = 115;
book1.genre = 'poetry';
book1.autors= [{name: 'Taras', age:47},];


let book2 = {};
console.log(book2);
book2.title = 'Lisova pisnya';
book2.pageCount = 630;
book2.genre = 'poetry';
book2.autors = [{name: 'Lesya', age:63}]

let book3 = {};
console.log(book3);
book3.title = 'Three hundred poetry';
book3.pageCount = 150;
book3.genre = 'poetry';
book3.autors=[{name: 'Lesya', age:63}];

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users=[
    {name:'0',username:'anna' ,password:'12'},
    {name:'1',username:'ira' ,password:'34'},
    {name:'2',username:'olya' ,password:'56'},
    {name:'3',username:'igor' ,password:'78'},
    {name:'4',username:'vasya' ,password:'910'},
    {name:'5',username:'kostya' ,password:'1112'},
    {name:'6',username:'bodya' ,password:'1113'},
    {name:'7',username:'petya' ,password:'1114'},
    {name:'8',username:'stepan' ,password:'1115'},
    {name:'9',username:'mykola', password:'1116'},
];
console.log(users)
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 5
if (5>0)
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".