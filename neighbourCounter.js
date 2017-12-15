function countNeighbours(currentGridState) {
    return new Map(
        currentGridState.map(
            cell => [`${cell.row},${cell.col}`, howManyNeighbours(cell, currentGridState)]
        )
    );
}

function howManyNeighbours(gridElement, currentGridState) {
    return currentGridState.filter(
        cell => inNeighbouringRow(gridElement, cell) && inNeighbouringCol(gridElement, cell)
    ).length - 1;
}

function inNeighbouringRow(cell, otherCell) {
    return Math.abs(cell.row - otherCell.row) < 2;
}

function inNeighbouringCol(cell, otherCell) {
    return Math.abs(cell.col - otherCell.col) < 2;
}

module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;