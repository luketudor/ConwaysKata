const survivingCells = require('./cellTransition').survivingCells;
const newCells = require('./cellTransition').newCells;

function nextGridState(currentGridState) {
    return new Set(nextGridStateArray(Array.from(currentGridState)));
}

function nextGridStateArray(currentGridStateArray) {
    return survivingCells(currentGridStateArray).concat(newCells(currentGridStateArray));
}

function printGrid(liveCells) {
    let liveCellsArray = [];
    for (let i = 0; i < 10; i++) {
        liveCellsArray[i] = [];
    }
    for (let cell of liveCells) {
        liveCellsArray[cell.row + 5][cell.col + 5] = true;
    }
    for (let row of liveCellsArray) {
        let stringRow = '';
        for (let ele of row) {
            if (ele) {
                stringRow += 'X';
            } else {
                stringRow += ' ';
            }
        }
        console.log(stringRow);
    }
}

module.exports.printGrid = printGrid;
module.exports.nextGridState = nextGridState;