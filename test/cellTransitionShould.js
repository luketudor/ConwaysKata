let assert = require('assert');
let survivingCells = require('../cellTransition').survivingCells;
let newCells = require('../cellTransition').newCells;

suite('CellTransition', function () {
    suite('#SurvivingCells', function() {
        test('return all cells as surviving', function() {
            let inputGrid = [
                {row: 0, col: 0, numNeighbours: 3},
                {row: 0, col: 1, numNeighbours: 3},
                {row: 1, col: 0, numNeighbours: 3},
                {row: 1, col: 1, numNeighbours: 3}
            ];
            let expectedOutputGrid = [
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0},
                {row: 1, col: 1}
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
                {row: 0, col: 0},
                {row: 0, col: 1},
                {row: 1, col: 0}
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
        test('return one new cell', function() {
            let inputGrid = [
                {row: 0, col: 0, numNeighbours: 2},
                {row: 0, col: 1, numNeighbours: 3},
                {row: 0, col: 2, numNeighbours: 1},
                {row: 1, col: 0, numNeighbours: 2}
            ];
            let expectedOutputGrid = [
                {row: -1, col: 1}
            ];

            let actualOutputGrid = newCells(inputGrid);

            assert.deepEqual(actualOutputGrid, expectedOutputGrid);
        });
    });
});