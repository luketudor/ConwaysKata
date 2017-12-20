const countNeighbours = require('./neighbourCounter').countNeighbours;

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
    for (const row of [cell.row - 1, cell.row, cell.row + 1]) {
        for (const col of [cell.col - 1, cell.col, cell.col + 1]) {
            yield {row, col};
        }
    }
}

function newCellsWithCorrectNeighbours(possibleNewCellsMap) {
    return Array.from(possibleNewCellsMap).filter(mapTuple => mapTuple[1] === 3).map(mapTuple => {
        const location = mapTuple[0].split(mapKeySeparator);
        return {row: parseInt(location[0], 10), col: parseInt(location[1], 10)};
    });
}

module.exports.newCells = newCells;