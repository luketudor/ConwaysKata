const countNeighbours = require('./neighbourCounter').countNeighbours;

const mapKeySeparator = '=';

function survivingCells(currentLiveCells) {
    const neighbours = countNeighbours(currentLiveCells, currentLiveCells, mapKeySeparator);
    return currentLiveCells.filter(
        cell => {
            const numNeighbours = neighbours.get(`${cell.row}${mapKeySeparator}${cell.col}`);
            return numNeighbours === 3 || numNeighbours === 2;
        }
    );
}

module.exports.survivingCells = survivingCells;