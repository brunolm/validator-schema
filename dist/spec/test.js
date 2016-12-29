"use strict";
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('test', function () {
    it('should validate test returning true for valid', function () {
        var schema = {
            name: {
                test: /goku/i,
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isTrue(result.valid);
        chai_1.assert.equal(result.errors.length, 0);
    });
    it('should validate test returning false for invalid', function () {
        var schema = {
            name: {
                test: /GOKU/,
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isFalse(result.valid);
        chai_1.assert.equal(result.errors.length, 1);
    });
});
//# sourceMappingURL=test.js.map