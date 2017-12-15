let assert = require('assert');
let countNeighbours = require('../neighbourCounter').countNeighbours;
let howManyNeighbours = require('../neighbourCounter').howManyNeighbours;

suite('Conways', function () {
    suite('#CountNeighbours', function () {
        test('return correct number of neighbours for input grid', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
            ];
            let expectedOutputGrid = [
                {row: 0, col: 0, numNeighbours: 3},
                {row: 0, col: 1, numNeighbours: 3},
                {row: 1, col: 0, numNeighbours: 3},
                {row: 1, col: 1, numNeighbours: 3}
            ];

            let actualOutputGrid = countNeighbours(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
        test('return correct number of neighbours for a different input grid', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 0, col: 2},
                {row: 1, col: 0}
            ];
            let expectedOutputGrid = [
                {row: 0, col: 0, numNeighbours: 2},
                {row: 0, col: 1, numNeighbours: 3},
                {row: 0, col: 2, numNeighbours: 1},
                {row: 1, col: 0, numNeighbours: 2}
            ];

            let actualOutputGrid = countNeighbours(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
    });
    suite('#HowManyNeighbours', function () {
        test('return number of neighbours for single element', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 0, col: 2},
                {row: 1, col: 0}
            ];
            let expectedOutputNum = 2;

            let actualOutputNum = howManyNeighbours(inputGrid[0], inputGrid);

            assert.equal(actualOutputNum, expectedOutputNum);
        });
        test('return number of neighbours for another element', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 0, col: 2},
                {row: 1, col: 0}
            ];
            let expectedOutputNum = 1;

            let actualOutputNum = howManyNeighbours(inputGrid[2], inputGrid);

            assert.equal(actualOutputNum, expectedOutputNum);
        });
    });
});