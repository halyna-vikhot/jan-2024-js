// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

function allCarts() {
    let url = new URL('https://dummyjson.com/carts');

    fetch(url)
        .then(res => res.json())
        .then(value => {
            let {carts} = value;
            console.log(value)

            const divCarts = document.getElementById('carts');
            for (const Cart of carts) {
                let {products} = Cart;
                const divCart = document.createElement('div');
                divCarts.appendChild(divCart)
                for (const product of products) {
                    const title = document.createElement('h2');
                    const price = document.createElement('div');
                    const quantity = document.createElement('div');
                    const total = document.createElement('div');
                    const discountedPrice = document.createElement('div');
                    const discountPercentage = document.createElement('div');
                    const img = document.createElement('img');

                    title.innerText = product.title;
                    price.innerText = `price: ${product.price}`;
                    quantity.innerText = `quantity: ${product.quantity}`;
                    total.innerText = `total: ${product.total}`;
                    discountedPrice.innerText = `discountedPrice: ${product.discountedPrice}`;
                    discountPercentage.innerText = `discountedPercentage: ${product.discountPercentage}`
                    img.src = product.thumbnail

                    divCart.append(title, price, quantity, total, discountPercentage, discountedPrice, img);
                }
            }
        });
}
allCarts()



//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)


