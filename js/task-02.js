const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRefs = document.querySelector("ul");

const newIngridientsEl = ingredients.map(a => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = a;
  ingredientEl.classList.add("item");
  return ingredientEl;
})

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredients[i];
//   ingredientEl.classList.add("item");
//   newIngridientsEl.push(ingredientEl);
// }


ingredientsListRefs.append(...newIngridientsEl);

