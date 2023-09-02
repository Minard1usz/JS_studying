const categories = document.querySelectorAll('.category');
const goodsList = document.querySelector('.goods-list');
const goodsName = document.querySelector('.goods-name');
const buyButton = document.querySelector('.buy-btn');

const data = {
  cars: [
    {name: 'Mazda 6',
    info: 'Сучасне авто за доступні гроші'},
    {name: 'BWM e46',
    info: 'Чудовий вибір, якщо хочеш жити на СТО'},
    {name: 'Ford Fusion',
    info: 'Топовий американець, не битий, не крашений'},
    {name: 'Toyota Camry 3.5',
    info: 'Неможливо зламати'},
    {name: 'Renault Logan',
    info: 'Бюджетний седан'}
  ],
  bicycles: [
    {name: 'PRIDE ROCX 8.2 CF',
    info: 'Неперевершений гравійник українського бренду'},
    {name: 'GIANT PROPEL ADVANCED 2',
    info: 'Топовий шоссер родом із Тайваню'},
    {name: 'CANNONDALE TRAIL 5 29',
    info: 'Неймовірний трейловий байк Голландської компанії'},
    {name: 'MARIN BOBCAT TRAIL 4 29',
    info: 'Американський кросс-кантрі байк'},
    {name: 'ORBEA OIZ H30 29',
    info: 'Гарячий іспанський двопідвіс'}
  ],
  motorbikes: [
    {name: '2016 Harley-Davidson V-Rod Muscle',
    info: 'Круїзний мотоцикл'},
    {name: '2022 TORROT Trial Two',
    info: 'Електромотоцикл'},
    {name: '2014 Yamaha WR450F',
    info: 'Дьорт байк'},
    {name: '2007 Honda VTR250',
    info: 'Чудовий байк для новачків'},
    {name: '2016 MV Agusta Brutale 800 Dragster RR',
    info: 'Шосейний мотоцикл'},
  ],
  scooters: [
    {name: 'Xiaomi Mi Electric Scooter Essential Black',
    info: 'Бюджетний скутер'},
    {name: 'Sencor S20 Black',
    info: 'Скутер для тривалої поїздки'},
    {name: 'Like.Bike Solo Black',
    info: 'Розкішний багатофункціональний електросамокат'},
    {name: 'Segway Ninebot C8 White',
    info: 'Простий та легкий у користуванні'},
    {name: 'NAVEE N65 Electric Scooter Black',
    info: 'Скутер середнього класу для міського використання'}
  ],
  rollerblades: [
    {name: 'Flying Eagle F5S Supersonic Eclipse Black', 
    info: 'Легкі та швидкі ролики'},
    {name: 'K2 F.I.T. 80 Pro Grey Black 2021', 
    info: 'Актуальні на сьогоднішній день'},
    {name: 'Micro MT Plus Blue', 
    info: 'Стильні та зручні ролики'},
    {name: 'Rollerblade Twister Edge Anthracite Yellow 2022', 
    info: 'Неперевершена якість'},
    {name: 'Flying Eagle F4 Raven Black', 
    info: 'Бюджетні та стійкі ролики'}
  ]
}

categories.forEach(category => {
  category.addEventListener('click', () => {
    const selectedCategory = category.getAttribute('data-category');
    const goods = data[selectedCategory];
    goodsList.innerHTML = '';

    goods.forEach(goods => {
      const li = document.createElement('li');
      li.textContent = goods.name;
      li.addEventListener('click', () => {
        goodsName.textContent = `${goods.name} - ${goods.info}`;
        buyButton.addEventListener('click', () => {
          alert(`Товар "${goods.name}" куплений!`);
          goodsName.textContent = '';
          goodsList.textContent = '';
          buyButton.removeEventListener('click', null);
        });
      });
      goodsList.appendChild(li);
    });
  });
});