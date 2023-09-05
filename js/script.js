function displayData() {
  const firstName = document.getElementById("firstName").value;
  const secondName = document.getElementById("secondName").value;
  const birthDate = document.getElementById("birthDate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;
  const languages = document.querySelectorAll('input[name="languages"]:checked');


  let listOfLanguages = [];
  for (const language of languages) {
    listOfLanguages.push(language.value);
  }


  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
  <h2>Реєстраційні дані:</h2>
  <table>
      <tr>
          <td>Ім'я:</td>
          <td>${firstName}</td>
      </tr>
      <tr>
          <td>Прізвище:</td>
          <td>${secondName}</td>
      </tr>
      <tr>
          <td>Дата народження:</td>
          <td>${birthDate}</td>
      </tr>
      <tr>
          <td>Стать:</td>
          <td>${gender}</td>
      </tr>
      <tr>
          <td>Місто:</td>
          <td>${city}</td>
      </tr>
      <tr>
          <td>Адреса:</td>
          <td>${address}</td>
      </tr>
      <tr>
          <td>Мови, якими володіє:</td>
          <td>${listOfLanguages.join(", ")}</td>
      </tr>
  </table>
  `;

}