let countNeighbours = require('./neighbourCounter').countNeighbours;

function survivingCells(currentGridStateWithNeighbours) {
    let neighbours = countNeighbours(currentGridStateWithNeighbours, currentGridStateWithNeighbours);
    return currentGridStateWithNeighbours.filter(
        cell => {
            let numNeighbours = neighbours.get(`${cell.row},${cell.col}`);
            return numNeighbours === 3 || numNeighbours === 2
        }
    );
}

function newCells(currentGridStateWithNeighbours) {
    let candidateZombies = possibleNewCellsMap(currentGridStateWithNeighbours);

    return newCellsWithCorrectNeighbours(candidateZombies);
}

function possibleNewCellsMap(liveCellsArray) {
    let allPossibleZombies = new Set();
    for (let cell of liveCellsArray) {
        for (let row of [cell.row - 1, cell.row, cell.row + 1]) {
            for (let col of [cell.col - 1, cell.col, cell.col + 1]) {
                allPossibleZombies.add({row, col});
            }
        }
    }
    let candidateZombies = countNeighbours(Array.from(allPossibleZombies), liveCellsArray);

    for (const oldCell of liveCellsArray) {
        candidateZombies.delete(`${oldCell.row},${oldCell.col}`);
    }
    return candidateZombies;
}

function newCellsWithCorrectNeighbours(possibleNewCellsMap) {
    let trueZombies = [];
    for (const [key, count] of possibleNewCellsMap) {
        if (count === 3) {
            let location = key.split(',');
            trueZombies.push({row: Number.parseInt(location[0], 10), col: Number.parseInt(location[1], 10)});
        }
    }
    return trueZombies;
}

module.exports.newCells = newCells;
module.exports.survivingCells = survivingCells;