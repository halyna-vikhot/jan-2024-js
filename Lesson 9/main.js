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
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// const body = document.body;
// const block = document.createElement('div');
//
// block.style.background = 'green';
//
// block.innerHTML = `<h2>${coursesAndDurationArray[0].title}</h2><p>${coursesAndDurationArray[0].monthDuration}</p>`;
//
// const block2 = block.cloneNode(true);
// block2.innerHTML = `<h2>${coursesAndDurationArray[1].title}</h2> <p>${coursesAndDurationArray[1].monthDuration}</p>`;
// const block3 = block.cloneNode(true);
// block2.innerHTML = `<h2>${coursesAndDurationArray[2].title}</h2> <p>${coursesAndDurationArray[2].monthDuration}</p>`;
// const block4 = block.cloneNode(true);
// block2.innerHTML = `<h2>${coursesAndDurationArray[3].title}</h2> <p>${coursesAndDurationArray[3].monthDuration}</p>`;
// const block5 = block.cloneNode(true);
// block2.innerHTML = `<h2>${coursesAndDurationArray[4].title}</h2> <p>${coursesAndDurationArray[4].monthDuration}</p>`;
// const block6 = block.cloneNode(true);
// block2.innerHTML = `<h2>${coursesAndDurationArray[5].title}</h2> <p>${coursesAndDurationArray[5].monthDuration}</p>`;
//
// body.append(block, block2, block3, block4, block5, block6);
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
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//
//     div.style.background = 'pink';
//
//     div.classList.add('item');
//     div.classList.add('heading');
//     div.classList.add('description');
//
//     h1.innerText = coursesAndDurationArrayElement.title;
//     p.innerText = coursesAndDurationArrayElement.monthDuration;
//     document.body.appendChild(div);
//     div.append(h1, p);
//
// }
// =====================================================================================================================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// const Simpsons = document.createElement('div');
// document.body.appendChild(Simpsons);
//
// for (const Simpson of simpsons) {
//     const member = document.createElement('div');
//     const name = document.createElement('h2');
//     const surname = document.createElement('h3');
//     const age = document.createElement('span');
//     const info = document.createElement('p');
//     const photo = document.createElement('img');
//     member.classList.add('member');
//
//     Simpsons.append(member)
//
//     name.innerText = Simpson.name;
//     surname.innerText = Simpson.surname;
//     age.innerText = Simpson.age;
//     info.innerText = Simpson.info;
//     photo.innerText = Simpson.photo;
//
//     member.append(name, surname, age, info, photo)
//
// }

// =====================================================================================================================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
for (const coursesArrayElement of coursesArray) {
    const cours = document.createElement('div');
    const coursInfo = document.createElement('div');
    const coursModules = document.createElement('div');
    const title = document.createElement('h2');
    const monthDuration = document.createElement('span');
    const hourDuration = document.createElement('span');
    const modules = document.createElement('ul')

    title.innerText = coursesArrayElement.title;
    monthDuration.innerText = coursesArrayElement.monthDuration;
    hourDuration.innerText = coursesArrayElement.hourDuration;

    cours.append(coursInfo, coursModules);
    coursInfo.append(title, monthDuration, hourDuration);
    coursModules.appendChild(modules);

    for (const module of coursesArrayElement.modules) {
        const moduleElement = document.createElement('li');
        modules.appendChild(moduleElement);
        moduleElement.innerText = module;
    }

    document.body.appendChild(cours);

}