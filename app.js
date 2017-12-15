let nextGridState = require('./conways').nextGridState;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function printUniverse(universe) {
    let uniArray = [];
    for (let i = 0; i < 10; i++) {
        uniArray[i] = [];
    }
    for (let cell of universe) {
        uniArray[cell.row + 5][cell.col + 5] = true;
    }
    for (let row of uniArray) {
        let stringRow = '';
        for (let ele of row) {
            if (ele) {
                stringRow += 'X';
            } else {
                stringRow += ' ';
            }
        }
        console.log(stringRow);
    }
}

console.log('Conway\'s Game of Life');
let uni = new Set([
    {row: 0, col: 0},
    {row: 0, col: 1},
    {row: 0, col: 2},
    {row: 1, col: 0}
]);
printUniverse(uni);
for (let i = 0; i < 5; i++) {
    uni = nextGridState(uni);
    printUniverse(uni);
}
