// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// const form = document.forms.fields;
// form.onsubmit = function (e){
//     e.preventDefault();
//
// const asd = document.createElement('div');
// const name = document.createElement('div');
// const surname = document.createElement('div');
// const age = document.createElement('div');
//
// name.innerText = `Name:${this.name.valueOf}`
// surname.innerText = `Surname:${this.surname.valueOf}`
// age.innerText = `Age:${this.age.valueOf}`
//
// this.name.value = '';
// this.surname.value = '';
// this.age.value = '';
//
// asd.append(name, surname, age);
// document.body.appendChild(asd);
// }
// ==========================
//<!--є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде-->
// <!--// додавати до неї +1-->

// const block = document.createElement('div');
// let store = localStorage.getItem('store') || '0';
// let NewStore = (+store + 1).toString();
// block.innerText = NewStore;
// localStorage.setItem("store", "NewStore");
// document.body.appendChild(block);
// //
// // ==========================
//