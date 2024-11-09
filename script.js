const form = document.querySelector(".form");
const button = document.querySelector("#button");

function check() {
  document.getElementById("agree").checked = true;
};
check();

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код

    const name = document.getElementById("name").value;
    const secondName = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: Darya-Dubovik'
      },
      body: JSON.stringify({
        name,
        secondName,
        phone,
        email,
        "agree": true
      }),
    })
    .then((result) => {
      alert("Данные успешно отправлены!"); 
      form.reset();
      return result.json();
    })
    .catch((error) => {
      alert("Ошибка!"); 
    });

});
