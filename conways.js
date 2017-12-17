const survivingCells = require('./cellTransition').survivingCells;
const newCells = require('./cellTransition').newCells;

const liveCellMarker = 'X';
const deadCellMarker = '-';
const gridRadius = 5;

function nextGridState(currentGridState) {
    return new Set(nextGridStateArray(Array.from(currentGridState)));
}

function nextGridStateArray(currentGridStateArray) {
    return survivingCells(currentGridStateArray).concat(newCells(currentGridStateArray));
}

function printGrid(liveCells) {
    let liveCellsArray = [];
    for (let i = 0; i < gridRadius*2; i++) {
        liveCellsArray[i] = [];
        liveCellsArray[i][gridRadius*2 - 1] = false;
    }
    for (let cell of liveCells) {
        liveCellsArray[cell.row + gridRadius][cell.col + gridRadius] = true;
    }
    for (let row of liveCellsArray) {
        let stringRow = '';
        for (let cell of row) {
            if (cell) {
                stringRow += liveCellMarker;
            } else {
                stringRow += deadCellMarker;
            }
        }
        console.log(stringRow);
    }
}

module.exports.printGrid = printGrid;
module.exports.nextGridState = nextGridState;