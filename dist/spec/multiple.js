"use strict";
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('multiple validators', function () {
    it('should work with multiple validators', function () {
        var schema = {
            name: {
                type: 'string',
                test: /GOKU/,
                fn: function (v) { return -v === 100; },
            },
        };
        var validate = index_1.default(schema);
        var user = { name: 'Goku' };
        var result = validate(user);
        chai_1.assert.isFalse(result.valid);
        chai_1.assert.equal(result.errors.length, 1);
        chai_1.assert.deepEqual(result.errors, [{ field: 'name', type: ['test', 'fn'] }]);
    });
});
//# sourceMappingURL=multiple.js.map