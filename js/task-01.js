const refs = {
    categories: document.querySelectorAll(".item"),
    titleCategories: categories.querySelectorAll("h2"),
    elementInCategories: categories.querySelectorAll("ul"),
}

console.log(`Number of categories: ${refs.categories.length}`);

for (let i = 0; i < refs.categories.length; i += 1) {
    console.log(`Category: ${refs.titleCategories[i].textContent}`);
    console.log(`Elements: ${refs.elementInCategories[i].children.length}`);
}

