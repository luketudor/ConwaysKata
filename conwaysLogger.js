const liveCellMarker = 'X';
const deadCellMarker = '-';
const gridRadius = 40;

function printGrid(liveCells) {
    const gridArray = [];
    for (let i = 0; i < gridRadius*2; i++) {
        gridArray[i] = [];
        gridArray[i][gridRadius*2 - 1] = false;
    }
    for (const cell of liveCells) {
        try {
            gridArray[cell.row + gridRadius][cell.col + gridRadius] = true;
        } catch (e) {
            // It's fine if rows and cols are out of bounds
        }
    }
    for (let i = 0; i < gridRadius*2; i++) {
        let stringRow = '';
        for (let j = 0; j < gridRadius*2; j++) {
            stringRow += gridArray[i][j] ? liveCellMarker : deadCellMarker;
        }
        console.log(stringRow);
    }
}

module.exports.printGrid = printGrid;