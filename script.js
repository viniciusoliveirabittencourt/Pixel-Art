let grindPixel = document.getElementById('grind-pixel');
let selected = document.getElementsByClassName('selected')[0];
const colors = document.getElementsByClassName('paint-collor');
const quantityPixels = document.getElementById('pixels');
quantityPixels.addEventListener('click', changePixelsQuantity);
const allPixels = document.getElementsByTagName('td');
const clearPixels = document.getElementById('clear-pixels').addEventListener('click', clearAllPixels);
const allRandom = document.getElementsByClassName('rand');
const changeColor = document.getElementById('change');
const inputColor = document.getElementById('input-color');
inputColor.addEventListener('change', colorChange);

function responsiveGridPixel() {
  let widthGrindPixel = grindPixel.offsetWidth;
  if (widthGrindPixel > 581) {
    let newAreaPixel = 581 / quantityPixels.value;
    for (let i = 0; i < allPixels.length; i += 1) {
      allPixels[i].style.width = `${newAreaPixel}px`;
      allPixels[i].style.height = `${newAreaPixel}px`;
    }
  }
}

function colorChange(e) {
  changeColor.style.backgroundColor = inputColor.value;
}

function generateHexadecimal() {
  let myHexa = "#";

  for (let i = 0; i < 6; i += 1) {
    myHexa += parseInt(Math.random() * 9);
  };

  return myHexa;
}

function removeAndAddPixelsGrind() {
  const grind = document.getElementById('grind');
  grind.removeChild(grindPixel);
  const newGrind = document.createElement('tbody');
  newGrind.id = 'grind-pixel';
  grind.appendChild(newGrind);
  grindPixel = newGrind;
}

function changePixelsQuantity(_) {
  removeAndAddPixelsGrind();
  for(let i = 0; i < quantityPixels.value; i += 1) {
    const createColum = document.createElement('tr');
    for(let i = 0; i < quantityPixels.value; i += 1) {
      const createLine = document.createElement('td');
      createLine.addEventListener('click', changePixel);
      createColum.appendChild(createLine);
    };
    grindPixel.appendChild(createColum);
  };
  responsiveGridPixel();
}

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
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
};

for(let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', changeSelected);
};


for(let i = 0; i < quantityPixels.value; i += 1) {
  const createColum = document.createElement('tr');
  for(let i = 0; i < quantityPixels.value; i += 1) {
    const createLine = document.createElement('td');
    createLine.addEventListener('click', changePixel);
    createColum.appendChild(createLine);
  };
  grindPixel.appendChild(createColum);
};

for(let i = 0; i < allRandom.length; i += 1) {
  allRandom[i].style.backgroundColor = generateHexadecimal();
}
