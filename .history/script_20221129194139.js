
//Create the container for the divs
const container = document.querySelector('#container');
const grid = getGrid(16);

//Create Grid
function getGrid(gridNum) {
 for (g = 0; g >= gridNum; g++) {
    const grid = document.createElement('div');
    grid.textContent = 'cell' 
    container.appendChild(grid);
 }
}




