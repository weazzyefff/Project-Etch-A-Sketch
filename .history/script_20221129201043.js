
//Initial check to see that we are running on browser/ server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

//Select the container for the divs (from ID)
const container = document.querySelector('#container');
const grid = getGrid(16,16);


//Create Grid
function getGrid(rows, columns) {
 for (r = 1; r <= rows; r++) {
    let rowCell = document.createElement('div');
    rowCell.className = 'cell';
    rowCell.textContent = 'row-cell' 
    container.appendChild(rowCell);
 }
 for (c = 1; c <= columns; c++) {
    let colCell = document.createElement('div');
    colCell.className = 'cell';
    colCell.textContent = 'row-cell' 
    container.appendChild(colCell);

 }
}




