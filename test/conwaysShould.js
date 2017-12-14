let assert = require('assert');
let nextGridState = require('../conways').nextGridState;
let countNeighbours = require('../conways').countNeighbours;
let howManyNeighbours = require('../conways').howManyNeighbours;
let survivingCells = require('../conways').survivingCells;
let newCells = require('../conways').newCells;

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

            //assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
    });
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
    suite('#SurvivingCellsShould', function() {
       test('return all cells as surviving', function() {
           let inputGrid = [
               {row: 0, col: 0, numNeighbours: 3},
               {row: 0, col: 1, numNeighbours: 3},
               {row: 1, col: 0, numNeighbours: 3},
               {row: 1, col: 1, numNeighbours: 3}
           ];
           let expectedOutputGrid = [
               {row: 0, col: 0, numNeighbours: 3},
               {row: 0, col: 1, numNeighbours: 3},
               {row: 1, col: 0, numNeighbours: 3},
               {row: 1, col: 1, numNeighbours: 3}
           ];

           let actualOutputGrid = survivingCells(inputGrid);

           assert.deepEqual(actualOutputGrid, expectedOutputGrid);
       });
       test('return some cells as surviving', function () {
           let inputGrid = [
               {row: 0, col: 0, numNeighbours: 2},
               {row: 0, col: 1, numNeighbours: 3},
               {row: 0, col: 2, numNeighbours: 1},
               {row: 1, col: 0, numNeighbours: 2}
           ];
           let expectedOutputGrid = [
               {row: 0, col: 0, numNeighbours: 2},
               {row: 0, col: 1, numNeighbours: 3},
               {row: 1, col: 0, numNeighbours: 2}
           ];

           let actualOutputGrid = survivingCells(inputGrid);

           assert.deepEqual(actualOutputGrid, expectedOutputGrid);
       });
    });
    suite('#NewCells', function() {
       test('return no new cells', function() {
           let inputGrid = [
               {row: 0, col: 0, numNeighbours: 3},
               {row: 0, col: 1, numNeighbours: 3},
               {row: 1, col: 0, numNeighbours: 3},
               {row: 1, col: 1, numNeighbours: 3}
           ];
           let expectedOutputGrid = [];

           let actualOutputGrid = newCells(inputGrid);

           assert.deepEqual(actualOutputGrid, expectedOutputGrid);
       });
    });
});