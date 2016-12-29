"use strict";
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('fn', function () {
    it('should validate fn returning true for valid', function () {
        var schema = {
            name: {
                fn: function (v) { return v.length === 4; },
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isTrue(result.valid);
        chai_1.assert.equal(result.errors.length, 0);
    });
    it('should validate fn returning false for invalid', function () {
        var schema = {
            name: {
                fn: function (v) { return v.length > 8000; },
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isFalse(result.valid);
        chai_1.assert.equal(result.errors.length, 1);
    });
});
//# sourceMappingURL=fn.js.map