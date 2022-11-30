//Select the container (from ID)
const container = document.querySelector('#container');


//Create button
btn = document.createElement("button");
btn.textContent = 'Create Grid'
document.body.appendChild(btn);

// Prompt user


btn.addEventListener('click', (e) => {

    let numSquares = prompt('How many rows and columns would you like?');

    /*if (!Number.isInteger(numSquares)) {
        return ('Error, please enter a number.')
    } else if (numSquares >= 100) {
        return ('Error, please enter a number between 0-100')
    } else {
        return 'numSquares = ' + numSquares;
    }*/

});



let rows = numSquares;
let columns = numSquares;
getGrid();

//Create Grid
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