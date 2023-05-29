const grindPixel = document.getElementById('grind-pixel');

for(let i = 0; i < 5; i += 1) {
  const createColum = document.createElement('tr');
  for(let i = 0; i < 5; i += 1) {
    const createLine = document.createElement('td');
    createColum.appendChild(createLine);
  };
  grindPixel.appendChild(createColum);
};
