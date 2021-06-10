const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients')

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
})
console.log(ingredientsEl)

ingredientsContainerEl.append(...ingredientsEl)
console.log(ingredientsContainerEl)