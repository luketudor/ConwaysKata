const survivingCells = require('./cellTransition').survivingCells;
const newCells = require('./cellTransition').newCells;

const liveCellMarker = 'X';
const deadCellMarker = '-';
const gridRadius = 10;

function nextGridState(currentGridState) {
    return new Set(nextGridStateArray(Array.from(currentGridState)));
}

function nextGridStateArray(currentGridStateArray) {
    return survivingCells(currentGridStateArray).concat(newCells(currentGridStateArray));
}

function printGrid(liveCells) {
    const gridArray = [];
    for (let i = 0; i < gridRadius*2; i++) {
        gridArray[i] = [];
        gridArray[i][gridRadius*2 - 1] = false;
    }
    for (const cell of liveCells) {
        gridArray[cell.row + gridRadius][cell.col + gridRadius] = true;
    }
    for (const row of gridArray) {
        let stringRow = '';
        for (const cell of row) {
            stringRow += cell ? liveCellMarker : deadCellMarker;
        }
        console.log(stringRow);
    }
}

function parseBitmap(bitArray) {
    const liveCells = new Set();
    for (let i = 0; i < bitArray.length; i++) {
        for (let j = 0; j < bitArray[i].length; j++) {
            if (bitArray[i][j]) {
                liveCells.add({row: i, col: j});
            }
        }
    }
    return liveCells;
}

module.exports.parseBitmap = parseBitmap;
module.exports.printGrid = printGrid;
module.exports.nextGridState = nextGridState;