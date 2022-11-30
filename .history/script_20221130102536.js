
//Initial check to see that we are running on browser/ server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
} else {
    console.log('You are on the server')
}

//Select the container (from ID)
const container = document.querySelector('#container');

//Create Grid
const grid = getGrid(16, 16);
function getGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (let c = 0; c < (rows * columns); c++) {
        let cell = document.createElement('div');
        cell.textContent = (c + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}





