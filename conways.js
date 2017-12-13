function nextGridState(currentGridState) {
    return Object.assign([], currentGridState);
}

function countNeighbours(currentGridState) {
    let outputGrid = Object.assign([], currentGridState);
<<<<<<< HEAD
    outputGrid.forEach(cell => {
        cell.numNeighbours = 3;
    });
=======
    outputGrid.forEach(cell => cell.numNeighbours = howManyNeighbours(cell, currentGridState));
>>>>>>> Small refactor
    return outputGrid;
}

function howManyNeighbours(gridElement, currentGridState) {
    return currentGridState.filter(cell =>
        Math.abs(gridElement.row - cell.row) < 2 && Math.abs(gridElement.col - cell.col) < 2
    ).length - 1;
}

module.exports.nextGridState = nextGridState;
module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;