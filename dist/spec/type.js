"use strict";
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('type', function () {
    it('should validate type returning true for valid', function () {
        var schema = {
            name: {
                type: 'string',
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isTrue(result.valid);
        chai_1.assert.equal(result.errors.length, 0);
    });
    it('should validate type returning false for invalid', function () {
        var schema = {
            name: {
                type: 'string',
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 2 };
        var result = validate(user);
        chai_1.assert.isFalse(result.valid);
        chai_1.assert.equal(result.errors.length, 1);
    });
});
//# sourceMappingURL=type.js.map