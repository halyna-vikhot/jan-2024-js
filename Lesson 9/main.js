// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const div = document.createElement('div');
//
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// div.style.background = 'grey';
// div.style.color = 'black'
// div.style.fontSize = '30px'
//
// document.body.appendChild(div);
// console.log(div)
//
// const clone = div.cloneNode(true);
// document.body.appendChild(clone);
// clone.style.fontSize = '30px';
// console.log(clone);

//----------------------------------------------------------------------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let Mass = ['Main', 'Products', 'About us', 'Contacts'];
// console.log(Mass)
// const ul =document.createElement('ul');
// const body = document.body;
//
// body.appendChild(ul);
//
// for (const mass of Mass) {
//     const li = document.createElement('li');
//     li.innerText = mass;
//     ul.appendChild(li);
// }

//----------------------------------------------------------------------------------------------------------------------
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const body = document.body;
const block = document.createElement('div');

block.style.background = 'green';

block.innerHTML = `<h2>${coursesAndDurationArray[0].title}</h2><p>${coursesAndDurationArray[0].monthDuration}</p>`;

const block2 = block.cloneNode(true);
block2.innerHTML = `<h2>${coursesAndDurationArray[1].title}</h2> <p>${coursesAndDurationArray[1].monthDuration}</p>`;
const block3 = block.cloneNode(true);
block2.innerHTML = `<h2>${coursesAndDurationArray[2].title}</h2> <p>${coursesAndDurationArray[2].monthDuration}</p>`;
const block4 = block.cloneNode(true);
block2.innerHTML = `<h2>${coursesAndDurationArray[3].title}</h2> <p>${coursesAndDurationArray[3].monthDuration}</p>`;
const block5 = block.cloneNode(true);
block2.innerHTML = `<h2>${coursesAndDurationArray[4].title}</h2> <p>${coursesAndDurationArray[4].monthDuration}</p>`;
const block6 = block.cloneNode(true);
block2.innerHTML = `<h2>${coursesAndDurationArray[5].title}</h2> <p>${coursesAndDurationArray[6].monthDuration}</p>`;
const block7 = block.cloneNode(true);
block2.innerHTML = `<h2>${coursesAndDurationArray[6].title}</h2> <p>${coursesAndDurationArray[6].monthDuration}</p>`;

body.append(block, block2, block3, block4, block5, block6);
//

//
// =====================================================================================================================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}

//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом