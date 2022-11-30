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

    if (isNaN(numSquares)) {
        alert('Error, please enter a number');
        let errTxt = document.createElement('div');
        errTxt.textContent = 'Error, please enter a number';
        document.body.appendChild(errTxt).className = 'errText';

    } else if (numSquares >= 500) {
        alert('Error, please enter a number between 0-100');
        let errTxt = document.createElement('div');
        errTxt.textContent = 'Error, please enter a number between 0-100';
        document.body.appendChild(errTxt).className = 'errText';

    } else {
        let rows = numSquares;
        let columns = numSquares;
        getGrid(rows, columns);
    }
});

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
            e.target.style.backgroundColor = (getRandColor);
        });
    }
}

function getRandColor() {
    let maxVal = 0xFFFFFF; //16,777,215 (In hex)
    let ranNum = Math.random() * maxVal; //returns a floating point random number
    alert(ranNum);
    //Convert the floating point number to an integer
    ranNum = Math.floor(ranNum);
    ranNum = ranNum.toString(16);
    let ranCol = ranNum.padStart(6,0);
    return `#${randColor.toUpperCase()}`
}