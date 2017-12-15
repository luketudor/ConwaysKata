let assert = require('assert');
let countNeighbours = require('../neighbourCounter').countNeighbours;
let howManyNeighbours = require('../neighbourCounter').howManyNeighbours;

suite('NeighbourCounter', function () {
    suite('#CountNeighbours', function () {
        test('return correct number of neighbours for input grid', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
            ];
            let expectedOutputMap = new Map([
                ['0,0', 3],
                ['0,1', 3],
                ['1,0', 3],
                ['1,1', 3]
            ]);

            let actualOutputMap = countNeighbours(inputGrid);

            assert.deepEqual(actualOutputMap, expectedOutputMap);
        });
        test('return correct number of neighbours for a different input grid', function () {
            let inputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 0, col: 2},
                {row: 1, col: 0}
            ];
            let expectedOutputMap = new Map([
                ['0,0', 2],
                ['0,1', 3],
                ['0,2', 1],
                ['1,0', 2]
            ]);

            let actualOutputMap = countNeighbours(inputGrid);

            assert.deepEqual(actualOutputMap, expectedOutputMap);
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