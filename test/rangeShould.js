let assert = require('assert');
let range = require('../util/range').range;

suite('Range', function() {
    test('return one number when start and end are the same', function() {
        let start = 3;
        let end = 3;
        let expectedRange = [3];

        let actualRange = range(start, end);

        assert.deepEqual(actualRange, expectedRange);
    });
    test('return a range from -2 to 2', function() {
       let start = -2;
       let end = 2;
       let expectedRange = [-2, -1, 0, 1, 2];

       let actualRange = range(start, end);

       assert.deepEqual(actualRange, expectedRange);
    });
});