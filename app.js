let nextGridState = require('./conways').nextGridState;
let printGrid = require('./conways').printGrid;
let parseBitmap = require('./conways').parseBitmap;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

console.log('Conway\'s Game of Life');
/*let liveCells = new Set([
    {row: 0, col: 1},
    {row: 0, col: 2},
    {row: 0, col: 3},
    {row: -1, col: 2}
]);*/
let smallExploder = [
    [0, 1, 0],
    [1, 1, 1],
    [1, 0, 1],
    [0, 1, 0]
];
let largeExploder = [
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1]
];
let glider = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
];
let liveCells = parseBitmap(glider);
for (let i = 0; i < 60; i++) {
    printGrid(liveCells);
    console.log();
    sleep(1000);
    liveCells = nextGridState(liveCells);
}
