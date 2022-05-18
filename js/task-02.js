const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const refs = {
  listEl: document.querySelector('#ingredients'),
};

ingredients.forEach(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  refs.listEl.append(item);
});
