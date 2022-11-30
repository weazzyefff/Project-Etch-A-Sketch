
//Create the container for the divs
const container = document.querySelector('#container');
const grid = getGrid();

//Create Grid
function getGrid(gridNum) {
 for (g = 0; g >= gridNum; g++) {
    grid = document.createElement('div');
    container.appendChild(grid);
 }
}
getGrid(16);



