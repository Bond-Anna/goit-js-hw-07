
const inputEl = document.querySelector('#validation-input');
const dataAttributeValue = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur() {
    if (inputEl.value.length === Number(dataAttributeValue)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length !== Number(dataAttributeValue)) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    if (inputEl.value.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
};
