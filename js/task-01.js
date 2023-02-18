const listRef = document.querySelector('#categories');
const itemClassItemRef = document.querySelector('.item');
console.log('Number of categories:', listRef.children.length);

for (let i = 0; i < listRef.children.length; i += 1) {
  let titleRef = listRef.children[i].firstElementChild.textContent;
  let ItemlLstRef = listRef.children[i].lastElementChild.children.length;

  console.log(`Category:`, titleRef);
  console.log(`Elements:`, ItemlLstRef);
}
