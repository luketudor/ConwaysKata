function nextGridState(currentGridState) {
    return new Set(currentGridState);
}

function survivingCells(currentGridStateWithNeighbours) {
    return currentGridStateWithNeighbours.filter(cell => cell.numNeighbours === 3 || cell.numNeighbours === 2);
}

function newCells(currentGridStateWithNeighbours) {
    let candidateZombies = new Map();
    for (let cell of currentGridStateWithNeighbours) {
        for (let row = cell.row - 1; row <= cell.row + 1; row++) {
            for (let col = cell.col - 1; col <= cell.col + 1; col++) {
                let candidateZombie = `${row},${col}`;
                let numNeighbours = candidateZombies.get(candidateZombie);
                if (candidateZombies.get(candidateZombie)) {
                    candidateZombies.set(candidateZombie, numNeighbours + 1);
                } else {
                    candidateZombies.set(candidateZombie, 1);
                }
            }
        }
    }

    for (var oldCell of currentGridStateWithNeighbours) {
        let key = `${oldCell.row},${oldCell.col}`;
        if (candidateZombies.has(key)) {
            candidateZombies.delete(key);
        }
    }

    let newCells = [];
    for (var [key, value] of candidateZombies) {
        if (value === 3) {
            let location = key.split(',');
            newCells.push({row: Number.parseInt(location[0], 10), col: Number.parseInt(location[1], 10)});
        }
    }
    return newCells;
}

function countNeighbours(currentGridState) {
    return currentGridState.map(cell => {
        return {row: cell.row, col: cell.col, numNeighbours: howManyNeighbours(cell, currentGridState)};
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

module.exports.newCells = newCells;
module.exports.survivingCells = survivingCells;
module.exports.nextGridState = nextGridState;
module.exports.countNeighbours = countNeighbours;
module.exports.howManyNeighbours = howManyNeighbours;