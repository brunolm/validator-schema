"use strict";
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('required', function () {
    it('should validate required returning true for valid', function () {
        var schema = {
            name: {
                required: true,
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isTrue(result.valid);
        chai_1.assert.equal(result.errors.length, 0);
    });
    it('should validate required returning false for invalid', function () {
        var schema = {
            name: {
                required: true,
            },
        };
        var validate = index_1.default(schema);
        var user = { name: '' };
        var result = validate(user);
        chai_1.assert.isFalse(result.valid);
        chai_1.assert.equal(result.errors.length, 1);
    });
});
//# sourceMappingURL=required.js.map