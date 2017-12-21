const countNeighbours = require('./neighbourCounter').countNeighbours;
const range = require('../util/range').range;

const mapKeySeparator = ';';

function newCells(currentLiveCells) {
    return newCellsWithCorrectNeighbours(possibleNewCellsMap(currentLiveCells));
}

function possibleNewCellsMap(liveCellsArray) {
    const cellKeySet = new Set(liveCellsArray.map(cell => `${cell.row}${mapKeySeparator}${cell.col}`));
    return countNeighbours(
        Array.from(new Set(allPossibleZombies(liveCellsArray, cellKeySet))), liveCellsArray, mapKeySeparator
    );
}

function* allPossibleZombies(liveCellsArray, cellKeySet) {
    for (const cell of liveCellsArray) {
        for (const neighbour of allNeighboursOf(cell)) {
            if (!cellKeySet.has(`${neighbour.row}${mapKeySeparator}${neighbour.col}`)) {
                yield neighbour;
            }
        }
    }
}

function* allNeighboursOf(cell) {
    for (const row of range(cell.row - 1, cell.row + 1)) {
        for (const col of range(cell.col - 1, cell.col + 1)) {
            yield {row, col};
        }
    }
}

function newCellsWithCorrectNeighbours(possibleNewCellsMap) {
    return Array.from(possibleNewCellsMap).filter(mapTuple => mapTuple[1] === 3).map(mapTuple => {
        const location = mapTuple[0].split(mapKeySeparator);
        return {row: +location[0], col: +location[1]};
    });
}

module.exports.newCells = newCells;