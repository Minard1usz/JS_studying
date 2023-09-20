const categories = document.querySelectorAll('.category');
const goodsList = document.querySelector('.goods-list');
const goodsName = document.querySelector('.goods-name');
const buyButton = document.querySelector('.buy-btn');
const submitButton = document.querySelector('.subm-btn');
const myOrdersButton = document.querySelector('.my-orders-btn');
const categoriesList = document.querySelector('.categories-list');
const ordersContainer = document.querySelector('.orders-container');
const ordersInfo = document.querySelector('.orders-info');
const ordersList = document.querySelector('.orders-list');

const data = {
  cars: [
    {name: 'Mazda 6',
    info: 'Сучасне авто за доступні гроші',
    price: '9000$'},
    {name: 'BWM e46',
    info: 'Чудовий вибір, якщо хочеш жити на СТО',
    price: '14000$'},
    {name: 'Ford Fusion',
    info: 'Топовий американець, не битий, не крашений',
    price: '17000$'},
    {name: 'Toyota Camry 3.5',
    info: 'Неможливо зламати',
    price: '22000$'},
    {name: 'Renault Logan',
    info: 'Бюджетний седан',
    price: '7000$'}
  ],
  bicycles: [
    {name: 'PRIDE ROCX 8.2 CF',
    info: 'Неперевершений гравійник українського бренду',
    price: '2000$'},
    {name: 'GIANT PROPEL ADVANCED 2',
    info: 'Топовий шоссер родом із Тайваню',
    price: '1400$'},
    {name: 'CANNONDALE TRAIL 5 29',
    info: 'Неймовірний трейловий байк Голландської компанії',
    price: '1200$'},
    {name: 'MARIN BOBCAT TRAIL 4 29',
    info: 'Американський кросс-кантрі байк',
    price: '1100$'},
    {name: 'ORBEA OIZ H30 29',
    info: 'Гарячий іспанський двопідвіс',
    price: '900$'}
  ],
  motorbikes: [
    {name: '2016 Harley-Davidson V-Rod Muscle',
    info: 'Круїзний мотоцикл',
    price: '4000$'},
    {name: '2022 TORROT Trial Two',
    info: 'Електромотоцикл',
    price: '1200$'},
    {name: '2014 Yamaha WR450F',
    info: 'Дьорт байк',
    price: '1300$'},
    {name: '2007 Honda VTR250',
    info: 'Чудовий байк для новачків',
    price: '850$'},
    {name: '2016 MV Agusta Brutale 800 Dragster RR',
    info: 'Шосейний мотоцикл',
    price: '3600$'},
  ],
  scooters: [
    {name: 'Xiaomi Mi Electric Scooter Essential Black',
    info: 'Бюджетний скутер',
    price: '300$'},
    {name: 'Sencor S20 Black',
    info: 'Скутер для тривалої поїздки',
    price: '900$'},
    {name: 'Like.Bike Solo Black',
    info: 'Розкішний багатофункціональний електросамокат',
    price: '2100$'},
    {name: 'Segway Ninebot C8 White',
    info: 'Простий та легкий у користуванні',
    price: '1450$'},
    {name: 'NAVEE N65 Electric Scooter Black',
    info: 'Скутер середнього класу для міського використання',
    price: '900$'}
  ],
  rollerblades: [
    {name: 'Flying Eagle F5S Supersonic Eclipse Black', 
    info: 'Легкі та швидкі ролики',
    price: '200$'},
    {name: 'K2 F.I.T. 80 Pro Grey Black 2021', 
    info: 'Актуальні на сьогоднішній день',
    price: '370$'},
    {name: 'Micro MT Plus Blue', 
    info: 'Стильні та зручні ролики',
    price: '290$'},
    {name: 'Rollerblade Twister Edge Anthracite Yellow 2022', 
    info: 'Неперевершена якість',
    price: '470$'},
    {name: 'Flying Eagle F4 Raven Black', 
    info: 'Бюджетні та стійкі ролики',
    price: '190$'}
  ]
};

function saveOrderToLocalStorage(order) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrdersFromLocalStorage() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  ordersContainer.innerHTML = '';

  orders.forEach((order, index) => {
    const orderItem = document.createElement('div');
    orderItem.innerHTML = `
    <p>Замовлення ${index + 1} <br> Дата: ${order.date}, <br> Ціна: ${order.price}</p> 
    <button class="view-order-btn" data-index="${index}">Деталі</button>
    <button class="delete-order-btn" data-index="${index}">Видалити</button>
    `;
    document.body.appendChild(orderItem);
    console.log(orderItem);

    orderItem.querySelector('.view-order-btn');
    orderItem.addEventListener('click', () => {
      const orderDetails = document.createElement('div');
      orderDetails.innerHTML = `
        <p><strong>Товар:</strong> ${order.goods.name}</p>
        <p><strong>Інформація про товар:</strong> ${order.goods.info}</p>
        <p><strong>ПІБ покупця:</strong> ${order.fullName}</p>
        <p><strong>Місто:</strong> ${order.city}</p>
        <p><strong>Склад Нової Пошти:</strong> ${order.npOffice}</p>
        <p><strong>Післяплата або оплата банківською карткою:</strong> ${order.paymentMethod}</p>
        <p><strong>Кількість товару:</strong> ${order.quantity}</p>
        <p><strong>Коментар до замовлення:</strong> ${order.comments}</p>
      `;
      goodsList.textContent = '';
      goodsName.textContent = '';
      orderForm.style.display = 'none';
      ordersList.innerHTML = '';
      ordersList.appendChild(orderDetails);
    });
    orderItem.querySelector('.delete-order-btn').addEventListener('click', () => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.splice(index, 1);
        localStorage.setItem('orders', JSON.stringify(orders));
       
    });
    ordersInfo.appendChild(orderItem);
  });
}



function handleClick() {
    categoriesList.textContent = '';
    goodsList.textContent = '';
    goodsName.textContent = '';
    orderForm.style.display = 'none';
    loadOrdersFromLocalStorage();
    myOrdersButton.removeEventListener('click', handleClick);
    console.log(myOrdersButton);
}

function myOrdersBtn() {
  myOrdersButton.addEventListener('click', handleClick);
}

myOrdersBtn();

categories.forEach(category => {
  orderForm.style.display = 'none';
  category.addEventListener('click', () => {
    const selectedCategory = category.getAttribute('data-category');
    const goods = data[selectedCategory];
    goodsList.innerHTML = '';

    goods.forEach(goods => {
      const li = document.createElement('li');
      li.textContent = goods.name;
      li.addEventListener('click', () => {
        goodsName.innerHTML = `
        Назва товару: ${goods.name};<br>
        Опис товару: ${goods.info};<br>
        Ціна: ${goods.price};
        `;

        buyButton.addEventListener('click', () => {
          const orderForm = document.getElementById('orderForm');
          orderForm.style.display = 'block';
        })

        orderForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const fullName = document.getElementById('fullName').value;
          const city = document.getElementById('city').value;
          const npOffice = document.getElementById('novaPoshtaOffice').value;
          const paymentMethod = document.getElementById('paymentMethod').value;
          const quantity = document.getElementById('quantity').value;
          const comments = document.getElementById('comment').value;

          if (!fullName || !city || !npOffice || !paymentMethod || !quantity || !comments) {
            alert('Будь ласка, заповніть всі обов\'язкові поля');
            return;
          }

          const order = {
            date: new Date().toLocaleString(),
            price: goods.price,
            goods,
            fullName,
            city,
            npOffice,
            paymentMethod,
            quantity,
            comments
          };

            saveOrderToLocalStorage(order);

          
          const orderInfo = document.createElement('div');
          orderInfo.innerHTML = `
          <h3>Інформація про замовлення:</h3>
          <p>Товар: ${goods.name}</p>
          <p>Інформація про товар: ${goods.info}</p>
          <p>Ціна: ${goods.price}</p>
          <p>ПІБ покупця: ${fullName}</p>
          <p>Місто: ${city}</p>
          <p>Склад Нової Пошти: ${npOffice}</p>
          <p>Післяплата або оплата банківською карткою: ${paymentMethod}</p>
          <p>Кількість товару: ${quantity}</p>
          <p>Коментар до замовлення: ${comments}</p>
          `;
          goodsName.textContent = '';
          goodsList.textContent = '';
          document.body.appendChild(orderInfo);
        });
      });
      goodsList.appendChild(li);
    });
  });
});

