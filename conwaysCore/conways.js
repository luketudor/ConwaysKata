const survivingCells = require('./findSurvivingCells').survivingCells;
const newCells = require('./findNewCells').newCells;

function nextGridState(currentGridState) {
    return new Set(nextGridStateArray(Array.from(currentGridState)));
}

function nextGridStateArray(currentGridStateArray) {
    return survivingCells(currentGridStateArray).concat(newCells(currentGridStateArray));
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
module.exports.nextGridState = nextGridState;