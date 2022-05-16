const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
const ulElement = document.createElement("li")
  ulElement.textContent = ingredients[i];
  ulElement.classList.add('item');
  elements.push(ulElement);
}
    

ingredientsList.append(...elements);