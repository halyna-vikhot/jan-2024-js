// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let arrWords = ['hello world', 'lorem ipsum', 'javascript is cool'];
// let Word = (arr)=>arr.forEach(item => console.log(item.length));
// Word(arrWords);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let srt = 'hello world';
// console.log(srt.toUpperCase());
// let srt= 'lorem ipsum';
// console.log(srt.toUpperCase());
// let srt='javascript is cool';
// console.log(srt.toUpperCase());
// ----------------------------------------------------------------------------------------------------------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let srt = 'HELLO WORLD';
// console.log(srt.toLowerCase());
// let srt = 'LOREM IPSUM';
// console.log(srt.toLowerCase());
// // let srt = 'JAVASCRIPT IS COOL';
// console.log(srt.toLowerCase());

// ----------------------------------------------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.replaceAll('  ', ''));
// //
// ------------------------------  ----------------------------------------------------------------------------------
// - Напишіть функцію string To array(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні'];

// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);
// ------------------------------  ----------------------------------------------------------------------------------
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let Numb = [10,8,-7,55,987,-1011,0,1050,0];
// let newNumb = Numb.map(String);
// console.log(newNumb);
// ------------------------------  ----------------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.

    // let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let sort = (arr, direction)=>
//     console.log(arr.sort((a, b) =>
//         direction === "descending" ? b - a : a - b));
//
// sort(nums, "ascending");
// sort(nums, "descending");
//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let arrSort = coursesAndDurationArray
//     .sort((a, b) =>
//         b.monthDuration - a.monthDuration);
// console.log(arrSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let arrFilter = coursesAndDurationArray.filter(item => item.monthDuration > 5);
// console.log(arrFilter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let Map = coursesAndDurationArray.map((user, index) => {
//     return {
//         id: index + 1,
//         user
//     }
// })
// console.log(Map);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    ]
// - знайти піковий туз

// let ace = cards.filter(item => item.value === 'ace' && item.cardSuit === 'spades');
// console.log(ace);
//
// // - всі шістки
// let six = cards.filter((unit)=>unit.value === '6');
// console.log('6');
//
// // - всі червоні карти
//
// let red = cards.filter((item)=> item.color === 'red');
// console.log(red)
//     //
// // - всі буби
// let diamonds= cards.filter(item=> item.cardSuit === 'diamonds' );
// console.log(diamonds);
//
// // - всі трефи від 9 та більше
// let clubs= cards.filter(item=>item.cardSuit === 'clubs').splice(4);
// console.log(clubs)

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardsSuit = (cardS,previousValue) => {
    return cardS.reduce(( prev, card) => {
        if (card.cardSuit === previousValue) {
            prev.push(card)
        }
        return prev;
    }, []);
}

console.log(cardsSuit(cards, 'diamonds'))
console.log(cardsSuit(cards, 'hearts'))
console.log(cardsSuit(cards, 'spades'))
console.log(cardsSuit(cards, 'clubs'))
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker