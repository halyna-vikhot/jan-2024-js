
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const x = (a, b) => a*b
// console.log(x(4, 6))
// --------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const circle = (r) =>  3.14*r**2
// console.log(circle(12))
//
// --------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const cylinder = (h, r) => 2*PI*h*r
// console.log(cylinder(15,35));

// / --------------------------------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
// const arr =[
//     {monday:'monday1', tuesday:'tuesday1', wednesday:'wednesday1'},
//     {monday:'monday2', tuesday:'tuesday2', wednesday:'wednesday2'},
//     {monday:'monday3', tuesday:'tuesday3', wednesday:'wednesday3'},
// ]
// const day = [monday,tuesday, wednesday] ;
// const days = arr => {
//     for (const dayElement of day) {
//         console.log(dayElement);
//     }
// }
// days(day);
// --------------------------------------------------------------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const paragraph = text=> console.log(`<p>${text}</p>`);
//  paragraph(`lorem`)
// --------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const day =  (item)=> {
//   document.write('<ul>');
//   for (let i = 0; i < 3; i++) {
//    document.write(`<li>${item}</li>`);
//   }
//   document.write('</ul>');
//  }
//
//  day('день');
// --------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const day2 = (item, value) =>{
//  document.write('<ul>');
//  for (let i = 0; i < value; i++) {
//   document.write(`<li>${item}</li>`);
//  }
//  document.write('</ul>');
// }
// day2('день2', 3);
// --------------------------------------------------------------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = ['1', '2', '3'];
// const Num = (arr) =>{
//  document.write('<ul>');
//  for (let i = 0; i < arr.length; i++) {
//   document.write(`<li>${arr[i]}</li>`);
//  }
//  document.write('</ul>');
// }
// Num(arr);
// --------------------------------------------------------------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// const users = [
//   {name: 'vasya', age: 25, id: 1},
//   {name: 'ira', age: 33, id: 2},
//   {name: 'max', age: 26, id: 3},
//   {name: 'vika', age: 24, id: 4},
//  ];
//  const block =  (arr) =>{
//
//   for (let i = 0; i < arr.length; i++) {
//    document.write(`<div>${arr[i].age} ${arr[i].name} ${arr[i].id}</div>`);
//   }
//  }
// block(users);
// --------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву
// let arrNumber = [1, 2, 3, 4, 5, 15, 0, -1, -2]
// const Number =  (arr)=> {
//     let min = arrNumber[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
//
// }
// console.log(Number(arrNumber));
// / --------------------------------------------------------------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// Приклад sum([1,2,10]) //->13
// const sumArr = (arr)=>{
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(sumArr(Number));
// --------------------------------------------------------------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let arrSwap = [11, 22, 33, 44];
// const swap =  (arr, index, index2)=> {
//     let elem = arr[index2];
//     arr[index2] = arr[index];
//     arr[index] = elem;
//     return arr;
// }
// console.log(swap(arrSwap, 0, 3));//[44, 22, 33, 11];
// --------------------------------------------------------------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let arrExchange = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
// const exchange =(sumUAH, currencyValues, exchangeCurrency)=> {
//     for (const item of currencyValues) {
//         if(item.currency === exchangeCurrency){
//             return sumUAH / item.value;
//         }
//
//     }
// }
//
// console.log(exchange(10000,arrExchange, 'USD'));
// console.log(exchange(10000,arrExchange, 'EUR'));