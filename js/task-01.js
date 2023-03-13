const listRef = document.querySelector('#categories');
const itemClassItemRef = document.querySelector('.item');
console.log('Number of categories:', listRef.children.length);

for (let i = 0; i < listRef.children.length; i += 1) {
  let titleRef = listRef.children[i].firstElementChild.textContent;
  let itemListRef = listRef.children[i].lastElementChild.children.length;

  console.log(`Category:`, titleRef);
  console.log(`Elements:`, itemListRef);
}

// const listRef = document.querySelector('#categories');

// const itemsRef = listRef.children.length;

// console.log('Number of categories:', itemsRef);

// for (let i = 0; i < itemsRef; i += 1) {
//   console.log('Category:', listRef.children[i].firstElementChild.textContent);
//   console.log('Elements', listRef.children[i].lastElementChild.children.length);
// }
