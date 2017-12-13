function nextGridState(currentGridState) {
    return Object.assign([], currentGridState);
}

function countNeighbours(currentGridState) {
    let outputGrid = Object.assign([], currentGridState);
    outputGrid.forEach(cell => {
        cell.numNeighbours = 3;
    });
    return outputGrid;
}

function howManyNeighbours(gridElement, currentGridState) {
    let numNeighbours = currentGridState.filter(cell =>
        Math.abs(gridElement.row - cell.row) < 2 && Math.abs(gridElement.col - cell.col) < 2
    ).length - 1;
    return numNeighbours;
}

module.exports.nextGridState = nextGridState;
module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;