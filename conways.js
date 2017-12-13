function nextGridState(currentGridState) {
    return new Set(currentGridState);
}

function countNeighbours(currentGridState) {
    return Array.from(currentGridState, cell => {
        return {row: cell.row, col: cell.col, numNeighbours: howManyNeighbours(cell, currentGridState)};
    });
}

function howManyNeighbours(gridElement, currentGridState) {
    return currentGridState.filter(cell =>
        Math.abs(gridElement.row - cell.row) < 2 && Math.abs(gridElement.col - cell.col) < 2
    ).length - 1;
}

module.exports.nextGridState = nextGridState;
module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;