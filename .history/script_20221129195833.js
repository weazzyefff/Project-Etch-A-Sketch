if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
//Create the container for the divs
const container = document.querySelector('#container');
const grid = getGrid(16);


//Create Grid
function getGrid(gridNum) {
 for (g = 1; g <= gridNum; g++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = 'cell text' 
    container.appendChild(cell);
 }
}




