const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const refs = {
  listEl: document.querySelector('#ingredients'),
};
const ingridientsList = [];

ingredients.forEach(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  ingridientsList.push(item);
});

refs.listEl.append(...ingridientsList);
