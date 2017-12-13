let assert = require('assert');
let nextBoardState = require('../conways').nextBoardState;

suite('Conways', function () {
    suite('#NextBoardState', function () {
        test('return the same board for a square input', function () {
            let inputBoard = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
                ];
            let expectedOutputBoard = inputBoard;

            let actualOutputBoard = nextBoardState(inputBoard);

            assert.deepEqual(actualOutputBoard, expectedOutputBoard);
        })
    })
})