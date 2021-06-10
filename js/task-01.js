const navEl = document.querySelector('#categories')
console.log(navEl)
console.log(`В списке ${navEl.children.length} категории.`)

const itemsEl = document.querySelectorAll('li.item')
console.log(itemsEl)
itemsEl.forEach(item => {
    const categoryName = item.querySelector('h2').textContent
    console.log(`Категория: ${categoryName}`)
    const categoryQuantity = item.querySelector('ul').children.length
    console.log(`Количество элементов: ${categoryQuantity}`)
});


