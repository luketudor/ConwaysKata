function nextGridState(currentGridState) {
    return new Set(currentGridState);
}

function survivingCells(currentGridStateWithNeighbours) {
    return currentGridStateWithNeighbours.filter(cell => cell.numNeighbours === 3 || cell.numNeighbours === 2);
}

function countNeighbours(currentGridState) {
    return Array.from(currentGridState, cell => {
        return {row: cell.row, col: cell.col, numNeighbours: howManyNeighbours(cell, Array.from(currentGridState))};
    });
}

function howManyNeighbours(gridElement, currentGridState) {
    return currentGridState.filter(cell =>
        inNeighbouringRow(gridElement, cell) && inNeighbouringCol(gridElement, cell)
    ).length - 1;
}

function inNeighbouringRow(cell, otherCell) {
    return Math.abs(cell.row - otherCell.row) < 2;
}

function inNeighbouringCol(cell, otherCell) {
    return Math.abs(cell.col - otherCell.col) < 2;
}

module.exports.survivingCells = survivingCells;
module.exports.nextGridState = nextGridState;
module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;