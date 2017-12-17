const survivingCells = require('./cellTransition').survivingCells;
const newCells = require('./cellTransition').newCells;

function nextGridState(currentGridState) {
    return new Set(nextGridStateArray(Array.from(currentGridState)));
}

function nextGridStateArray(currentGridStateArray) {
    return survivingCells(currentGridStateArray).concat(newCells(currentGridStateArray));
}

module.exports.nextGridState = nextGridState;