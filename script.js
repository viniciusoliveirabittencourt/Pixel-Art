const grindPixel = document.getElementById('grind-pixel');
let selected = document.getElementsByClassName('selected')[0];
const colors = document.getElementsByClassName('paint-collor');
const clearPixels = document.getElementById('clear-pixels').addEventListener('click', clearAllPixels);

function changeSelected(e) {
  if (e.target.id !== selected) {
    selected.classList.remove('selected');
    e.target.classList.add('selected');
    selected = e.target
  }
}

function changePixel(e) {
  e.target.style.backgroundColor = `${getComputedStyle(selected).backgroundColor}`;
};

function clearAllPixels(_) {
  const allPixels = document.getElementsByTagName('td');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
};

for(let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', changeSelected);
};


for(let i = 0; i < 5; i += 1) {
  const createColum = document.createElement('tr');
  for(let i = 0; i < 5; i += 1) {
    const createLine = document.createElement('td');
    createLine.addEventListener('click', changePixel);
    createColum.appendChild(createLine);
  };
  grindPixel.appendChild(createColum);
};
