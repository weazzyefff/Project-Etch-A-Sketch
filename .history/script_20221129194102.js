
//Create the container for the divs
const container = document.querySelector('#container');
const grid = getGrid();

//Create Grid
function getGrid(gridNum) {
 for (g = 0; g >= gridNum; g++) {
    const grid = document.createElement('div');
    grid.textContent = 'cell' 
    container.appendChild(grid);
 }
}
getGrid(16);



