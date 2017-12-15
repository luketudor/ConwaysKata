function countNeighbours(cellsToCount, potentialNeighbours) {
    return new Map(
        cellsToCount.map(
            cell => [`${cell.row},${cell.col}`, howManyNeighbours(cell, potentialNeighbours)]
        )
    );
}

function howManyNeighbours(gridElement, currentGridState) {
    return currentGridState.filter(
        cell => inNeighbouringRow(gridElement, cell) && inNeighbouringCol(gridElement, cell)
    ).length;
}

function inNeighbouringRow(cell, otherCell) {
    return Math.abs(cell.row - otherCell.row) < 2 && cell !== otherCell;
}

function inNeighbouringCol(cell, otherCell) {
    return Math.abs(cell.col - otherCell.col) < 2 && cell !== otherCell;
}

module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;