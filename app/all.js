fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(function (resp) {return resp.json()})
  .then(function (data) {
    console.log(data);
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.degree').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.description').textContent = data.weather[0].description;
    document.querySelector('.humidity').textContent = data.main.humidity;
    document.querySelector('.pressure').textContent = data.main.pressure;
    document.querySelector('.speed').textContent = data.wind.speed;
    document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })

  .catch(function () {
    // catch any errors
  })

  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>')