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
    let allPossibleZombies = new Set();
    for (let cell of currentGridStateWithNeighbours) {
        for (let row = cell.row - 1; row <= cell.row + 1; row++) {
            for (let col = cell.col - 1; col <= cell.col + 1; col++) {
                allPossibleZombies.add({row, col});
            }
        }
    }
    let candidateZombies = countNeighbours(Array.from(allPossibleZombies), currentGridStateWithNeighbours);
    
    for (const oldCell of currentGridStateWithNeighbours) {
        candidateZombies.delete(`${oldCell.row},${oldCell.col}`);
    }

    let newCells = [];
    for (const [key, count] of candidateZombies) {
        if (count === 3) {
            let location = key.split(',');
            newCells.push({row: Number.parseInt(location[0], 10), col: Number.parseInt(location[1], 10)});
        }
    }
    return newCells;
}

module.exports.newCells = newCells;
module.exports.survivingCells = survivingCells;