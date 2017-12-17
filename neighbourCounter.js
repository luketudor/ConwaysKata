function countNeighbours(cellsToCount, potentialNeighbours, keySeparator) {
    return new Map(
        cellsToCount.map(
            cell => [`${cell.row}${keySeparator}${cell.col}`, howManyNeighbours(cell, potentialNeighbours)]
        )
    );
}

function howManyNeighbours(gridElement, currentGridState) {
    return currentGridState.filter(
        cell =>
            inNeighbouringField(gridElement, cell, 'row') &&
            inNeighbouringField(gridElement, cell, 'col') &&
            gridElement !== cell
    ).length;
}

function inNeighbouringField(cell, otherCell, fieldName) {
    return Math.abs(cell[fieldName] - otherCell[fieldName]) < 2;
}

module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;