const listRef = document.querySelector('#categories');
// const allCategoriesRef = listRef.children;
console.log('Number of categories:', listRef.children.length);

// const firstItemListRef = listRef.firstElementChild;
const titeFirstlItemListRef = listRef.firstElementChild.firstElementChild;
const listFirstItemListRef = listRef.firstElementChild.lastElementChild;

console.log('Category:', titeFirstlItemListRef.textContent);
console.log('Elements:', listFirstItemListRef.children.length);

// const secondListItemListRef = listRef.firstElementChild.nextElementSibling;
const titelSecondItemListRef =
  listRef.firstElementChild.nextElementSibling.firstElementChild;
const listSecondItemListRef =
  listRef.firstElementChild.nextElementSibling.lastElementChild;

console.log('Category:', titelSecondItemListRef.textContent);
console.log('Elements:', listSecondItemListRef.children.length);

// const lastListItemListRef = listRef.lastElementChild;
const titelLastItemListRef = listRef.lastElementChild.firstElementChild;
const listLastItemListRef = listRef.lastElementChild.lastElementChild;

console.log('Category:', titelLastItemListRef.textContent);
console.log('Elements:', listLastItemListRef.children.length);
