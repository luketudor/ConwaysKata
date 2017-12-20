const countNeighbours = require('./neighbourCounter').countNeighbours;

const mapKeySeparator = ';';

function newCells(currentLiveCells) {
    return newCellsWithCorrectNeighbours(possibleNewCellsMap(currentLiveCells));
}

function possibleNewCellsMap(liveCellsArray) {
    const liveCellsSet = new Set(liveCellsArray.map(cell => `${cell.row}${mapKeySeparator}${cell.col}`));
    const allPossibleZombies = new Set();
    for (const cell of liveCellsArray) {
        for (const row of [cell.row - 1, cell.row, cell.row + 1]) {
            for (const col of [cell.col - 1, cell.col, cell.col + 1]) {
                if (!liveCellsSet.has(`${row}${mapKeySeparator}${col}`)) {
                    allPossibleZombies.add({row, col});
                }
            }
        }
    }
    return countNeighbours(Array.from(allPossibleZombies), liveCellsArray, mapKeySeparator);
}

function newCellsWithCorrectNeighbours(possibleNewCellsMap) {
    const trueZombies = [];
    for (const [key, count] of possibleNewCellsMap) {
        if (count === 3) {
            const location = key.split(mapKeySeparator);
            trueZombies.push({row: parseInt(location[0], 10), col: parseInt(location[1], 10)});
        }
    }
    return trueZombies;
}

module.exports.newCells = newCells;