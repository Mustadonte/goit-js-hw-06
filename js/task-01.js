const refs = {
    listCategories: document.querySelector("#categories"),
    listTitles: document.querySelectorAll("li.item h2"),
    categoryItem: document.querySelectorAll("li ul")
}

console.log(`Number of categories: ${refs.listCategories.children.length}`);

const categoriesTitlesArray = [...refs.listTitles].map(el => el.textContent);
const categoriesItemsArray = [...refs.categoryItem].map(el => el.childElementCount);


for (let i = 0; i < categoriesTitlesArray.length; i += 1) {
    console.log(`Category: ${categoriesTitlesArray[i]}`);
    console.log(`Elements: ${categoriesItemsArray[i]}`);
}

