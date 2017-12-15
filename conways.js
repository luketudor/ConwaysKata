let countNeighbours = require('./neighbourCounter').countNeighbours;
let survivingCells = require('./cellTransition').survivingCells;
let newCells = require('./cellTransition').newCells;

function nextGridState(currentGridState) {
    let countedCells = countNeighbours(Array.from(currentGridState));
    return new Set(survivingCells(countedCells).concat(newCells(countedCells)));
}

module.exports.nextGridState = nextGridState;