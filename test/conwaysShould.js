let assert = require('assert');
let nextGridState = require('../conways').nextGridState;

suite('Conways', function () {
    suite('#NextBoardState', function () {
        test('return the same grid for a square input', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
                ];
            let expectedOutputGrid = Object.assign({}, inputGrid);

            let actualOutputGrid = nextGridState(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
        test('return the zig-zag tetris piece for the L-shaped tetris piece', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 0, col: 2},
                {row: 1, col: 0}
            ];
            let expectedOutputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: -1, col: 1},
                {row: 1, col: 0}
            ];

            let actualOutputGrid = nextGridState(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });

    });
});