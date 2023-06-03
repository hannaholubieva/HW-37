// // Створити ф-ю конструктор SuperMath.
// // Додати до екземпляра метод - check(obj) та input, параметр obj якого має властивості X, Y, znak.
// //Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
// //Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше -
// //запитати введення нових даних через метод-екземпляра input() який поверне новий obj .

// // Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// // При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

function SuperMath() {}

SuperMath.prototype.check = function (obj) {
  const znaks = ["+", "-", "/", "*", "%"];

  const agreement = confirm(
    `Вы хотели бы выполнить ${obj.znak} со значениями ${obj.X} и ${obj.Y}`
  );

  if (agreement) {
    const result = this[obj.znak](obj.X, obj.Y);
    console.log(result);
  } else {
    const usersObject = this.input();

    if (!isNaN(usersObject.X) && !isNaN(usersObject.Y) && usersObject.znak !== undefined) {
        if (znaks.includes(usersObject.znak)) {
          const result = this[usersObject.znak](usersObject.X, usersObject.Y);
          console.log(result);
        } else {
          alert("Используется некорректный знак");
        }
      } else {
        console.log("Введены не цифры");
      }
    }
}

SuperMath.prototype.input = function () {
  var object = {};
  object.X = parseInt(prompt("Введите значение X:"));
  object.Y = parseInt(prompt("Введите значение Y:"));
  object.znak = prompt("Введите знак операции (+, -, /, *, %):");
  return object;
};

SuperMath.prototype["+"] = function (x, y) {
  return x + y;
};

SuperMath.prototype["-"] = function (x, y) {
  return x - y;
};

SuperMath.prototype["/"] = function (x, y) {
  return x / y;
};

SuperMath.prototype["*"] = function (x, y) {
  return x * y;
};

SuperMath.prototype["%"] = function (x, y) {
  return x % y;
};

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj); // --> no p.input() -> 3 prompt -> рахує
