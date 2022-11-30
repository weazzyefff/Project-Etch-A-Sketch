//Global variables
let numSquares = 0;

//Select the container (from ID)
const container = document.querySelector('#container');


//Create button
btn = document.createElement("button");
btn.textContent = 'Create Grid'
document.body.appendChild(btn);

// Prompt user


btn.addEventListener('click', (e) => {

   
    numSquares = prompt('How many rows and columns would you like?');
    valInput(numSquares);
    let rows = numSquares;
    let columns = numSquares;
    getGrid(rows, columns);
    console.log('numSquares = ' + numSquares)


});

//Validate input
function valInput(numSquares) {
    if (!Number.isInteger(numSquares)) {
        let errTxt = document.createElement('div');
        errTxt.textContent = 'Error, please enter a number';
        document.body.appendChild(errTxt).className = 'errText';
    } else if (numSquares >= 500) {
        let errTxt = document.createElement('div');
        errTxt.textContent = 'Error, please enter a number between 0-100';
        document.body.appendChild(errTxt).className = 'errText';
    }
}

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