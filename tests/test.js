'use strict';


var mod = require('../js/main');

var mockModify = function mockModify(_original) {
    expect(_original).toBe(5);
    return 6;
};

mod.__set__('external', {
    'modify': mockModify
});


describe('Repro suite', function() {

    it('calls a mocked function', function() {
        var val = mod.getAValue();
        expect(val).toBe(6);
    });
});
