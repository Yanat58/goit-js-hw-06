const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");
const allItems = [];

for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);
  let newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = `${ingredients[i]}`;

  allItems.push(newItem);
}
listRef.append(...allItems);