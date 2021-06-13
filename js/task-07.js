
const sizeControl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

sizeControl.addEventListener('input', onSizeControlInput)
function onSizeControlInput() {
    textEl.style.fontSize = `${sizeControl.value}px`
}