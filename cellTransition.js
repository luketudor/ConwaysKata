function survivingCells(currentGridStateWithNeighbours) {
    return currentGridStateWithNeighbours.filter(cell => (cell.numNeighbours === 3 || cell.numNeighbours === 2) &&
        delete cell.numNeighbours);
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

    for (const oldCell of currentGridStateWithNeighbours) {
        let key = `${oldCell.row},${oldCell.col}`;
        if (candidateZombies.has(key)) {
            candidateZombies.delete(key);
        }
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