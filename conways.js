let survivingCells = require('./cellTransition').survivingCells;
let newCells = require('./cellTransition').newCells;

function nextGridState(currentGridState) {
    return new Set(survivingCells(Array.from(currentGridState)).concat(newCells(Array.from(currentGridState))));
}

module.exports.nextGridState = nextGridState;