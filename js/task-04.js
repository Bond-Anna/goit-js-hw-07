// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const btnDecrEl = document.querySelector('button[data-action="decrement"]')
console.log(btnDecrEl)
const valueEl = document.querySelector('#value');
console.log(valueEl)
const btnIncrEl = document.querySelector('button[data-action="increment"]')
console.log(btnIncrEl)

let counterValue = 0;
function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

btnDecrEl.addEventListener('click', decrement)
btnIncrEl.addEventListener('click', increment)

