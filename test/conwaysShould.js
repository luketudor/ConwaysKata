let assert = require('assert');
let nextGridState = require('../conways').nextGridState;
let parseBitmap = require('../conways').parseBitmap;

suite('Conways', function () {
    suite('#NextBoardState', function () {
        // n.b. All grids, both input and output, operate on the closed-world assumption.
        // i.e. Every cell that is listed in a grid is assumed to be truthy or "alive", and every other cell is
        // assumed to be falsy or "dead".
        test('return the same grid for a square input', function () {
            let inputGrid = new Set([
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
            ]);
            let expectedOutputGrid = new Set([
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
            ]);

            let actualOutputGrid = nextGridState(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
        test('return the same grid in a different cell order', function () {
            let inputGrid = new Set([
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
            ]);
            let expectedOutputGrid = new Set([
                {row: 0, col: 0},
                {row: 1, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 1}
            ]);

            let actualOutputGrid = nextGridState(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
        test('return the zig-zag tetris piece for the L-shaped tetris piece', function () {
            let inputGrid = new Set([
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 0, col: 2},
                {row: 1, col: 0}
            ]);
            let expectedOutputGrid = new Set([
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: -1, col: 1},
                {row: 1, col: 0}
            ]);

            let actualOutputGrid = nextGridState(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
    });
    suite('#ParseBitmap', function() {
        test('return an empty set for blank bitmap', function() {
            let inputArray = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            ];
            let expectedOutputSet = new Set();

            let actualOutputSet = parseBitmap(inputArray);

            assert.deepEqual(actualOutputSet, expectedOutputSet);
        });
        test('return a T set for T shaped bitmap', function() {
            let inputArray = [
                [0, 1, 0],
                [1, 1, 1]
            ];
            let expectedOutputSet = new Set([
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1},
                {row: 1, col: 2}
            ]);

            let actualOutputSet = parseBitmap(inputArray);

            assert.deepEqual(actualOutputSet, expectedOutputSet);
        });
    });
});