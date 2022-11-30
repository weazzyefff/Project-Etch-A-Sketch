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

        //Change colour of cell while hovering over it
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = ('blue');
        });
    }
}






