// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


// function allCards() {
//     let url = new URL('https://dummyjson.com/carts');
//
//     fetch(url)
//         .then(res => res.json())
//         .then(value => {
//             let {carts} = value;
//             console.log(value)
//
//             const divCarts = document.getElementById('cards');
//             for (const Cart of carts) {
//                 let {products} = Cart;
//                 const cartDiv = document.createElement('div');
//                 divCarts.appendChild(cartDiv)
//                 for (const product of products) {
//                     const title = document.createElement('h2');
//                     const price = document.createElement('div');
//                     const quantity = document.createElement('div');
//                     const total = document.createElement('div');
//                     const discountedPrice = document.createElement('div');
//                     const img = document.createElement('img');
//
//                     title.innerText = products.title;
//                     price.innerText = `price: ${product.price}`;
//                     quantity.innerText = `quantity: ${product.quantity}`;
//                     total.innerText = `total: ${product.total}`;
//                     discountedPrice.innerText = `discountedPrice: ${product.discountedPrice}`;
//                     discountPercentage.innerText = `discountedPercentage: ${product.discountPercentage}`
//                     img.src = product.thumbnail
//
//                     Div.append(title, price, quantity, total, discountPercentage, discountedPrice, img);
//                 }
//             }
//         });
// }
// allCards()






//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)


