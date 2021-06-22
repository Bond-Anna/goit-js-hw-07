
const sizeControl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
textEl.style.fontSize = `${sizeControl.value}px`

sizeControl.addEventListener('input', onSizeControlInput)
function onSizeControlInput() {
    textEl.style.fontSize = `${sizeControl.value}px`
}