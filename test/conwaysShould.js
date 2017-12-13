var assert = require('assert');
var nextBoardState = require('../conways').nextBoardState;

suite('Conways', function() {
    suite('#NextBoardState', function() {
        test('', function() {
            nextBoardState();
            assert.equal('foo', 'foo');
        })
    })
})