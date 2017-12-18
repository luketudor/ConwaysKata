const survivingCells = require('./cellTransition').survivingCells;
const newCells = require('./cellTransition').newCells;

const liveCellMarker = 'X';
const deadCellMarker = '-';
const gridRadius = 40;

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
        try {
            gridArray[cell.row + gridRadius][cell.col + gridRadius] = true;
        } catch (e) {
            // It's fine if rows and cols are out of bounds
        }
    }
    for (let i = 0; i < gridRadius*2; i++) {
        let stringRow = '';
        for (let j = 0; j < gridRadius*2; j++) {
            stringRow += gridArray[i][j] ? liveCellMarker : deadCellMarker;
        }
        console.log(stringRow);
    }
}

function parseBitmap(bitmap) {
    const liveCells = new Set();
    for (let i = 0; i < bitmap.length; i++) {
        for (let j = 0; j < bitmap[i].length; j++) {
            if (bitmap[i][j]) {
                liveCells.add({row: i, col: j});
            }
        }
    }
    return liveCells;
}

module.exports.parseBitmap = parseBitmap;
module.exports.printGrid = printGrid;
module.exports.nextGridState = nextGridState;