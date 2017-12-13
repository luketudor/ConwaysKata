function nextGridState(currentGridState) {
    return Object.assign([], currentGridState);
}

function countNeighbours(currentGridState) {
    let outputGrid = Object.assign([], currentGridState);
    outputGrid.forEach(cell => cell.numNeighbours = 3);
    return outputGrid;
}

module.exports.nextGridState = nextGridState;
module.exports.countNeighbours = countNeighbours;