const refs = {
  listCategories: document.querySelectorAll('li.item'),
  listTitles: document.querySelectorAll('li.item h2'),
  categoryItem: document.querySelectorAll('li ul'),
};

console.log(`Number of categories: ${[...refs.listCategories].length}`);

[...refs.listCategories].forEach(el => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].childElementCount}`);
});
