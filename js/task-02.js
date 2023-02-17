const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const potatosItemRef = document.createElement('li');
potatosItemRef.classList.add('item');
potatosItemRef.textContent = 'Potatoes';
// console.log(potatosItemRef);

const mushroomsItemRef = document.createElement('li');
mushroomsItemRef.classList.add('item');
mushroomsItemRef.textContent = 'Mushrooms';

const garlikItemRef = document.createElement('li');
garlikItemRef.classList.add('item');
garlikItemRef.textContent = 'Garlic';

const tomatosItemRef = document.createElement('li');
tomatosItemRef.classList.add('item');
tomatosItemRef.textContent = 'Tomatos';

const herbsItemRef = document.createElement('li');
herbsItemRef.classList.add('item');
herbsItemRef.textContent = 'Herbs';

const condimentsItemRef = document.createElement('li');
condimentsItemRef.classList.add('item');
condimentsItemRef.textContent = 'Condiments';

const listRef = document.querySelector('#ingredients');

listRef.append(
  potatosItemRef,
  mushroomsItemRef,
  garlikItemRef,
  tomatosItemRef,
  herbsItemRef,
  condimentsItemRef
);
// console.log(listRef);
