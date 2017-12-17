let nextGridState = require('./conways').nextGridState;
let printGrid = require('./conways').printGrid;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

console.log('Conway\'s Game of Life');
let liveCells = new Set([
    {row: 0, col: 0},
    {row: 0, col: 1},
    {row: 0, col: 2},
    {row: 1, col: 0}
]);
for (let i = 0; i < 5; i++) {
    printGrid(liveCells);
    console.log();
    sleep(1000);
    liveCells = nextGridState(liveCells);
}
