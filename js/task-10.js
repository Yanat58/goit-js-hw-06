function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const divRef = document.querySelector('#controls');
const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const creatBoxesRef = document.querySelector('#boxes');

 
  createBtn.addEventListener('click', CreateBoxes);

let amount = 0;

   function CreateBoxes() {
    amount = Number(inputRef.value);
    console.log(amount);

    for(let i=1; i<= amount; i+=1 ) {
    let div = document.createElement('div');
      div.style.width = 20 + `${i}` * 10 +`px`;
      div.style.height = 20 + `${i}` * 10 +`px`;
      div.style.backgroundColor = getRandomHexColor();

     creatBoxesRef.appendChild(div);
    }
  };

destroyBtn.addEventListener('click', ondestroyBoxes); 
function ondestroyBoxes (){
  creatBoxesRef.innerHTML= '';
};

