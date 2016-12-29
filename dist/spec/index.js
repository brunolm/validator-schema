"use strict";
var chai_1 = require("chai");
var index_1 = require("../src/index");
describe('validator-schema', function () {
    describe('type', function () {
        it('should validate type returning true for valid', function () {
            var schema = {
                name: {
                    type: 'string',
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 'Goku' };
            chai_1.assert.isTrue(validate(user));
        });
        it('should validate type returning false for invalid', function () {
            var schema = {
                name: {
                    type: 'string',
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 2 };
            chai_1.assert.isFalse(validate(user));
        });
    });
    describe('test', function () {
        it('should validate test returning true for valid', function () {
            var schema = {
                name: {
                    test: /goku/i,
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 'Goku' };
            chai_1.assert.isTrue(validate(user));
        });
        it('should validate test returning false for invalid', function () {
            var schema = {
                name: {
                    test: /GOKU/,
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 'Goku' };
            chai_1.assert.isFalse(validate(user));
        });
    });
    describe('fn', function () {
        it('should validate fn returning true for valid', function () {
            var schema = {
                name: {
                    fn: function (v) { return v.length === 4; },
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 'Goku' };
            chai_1.assert.isTrue(validate(user));
        });
        it('should validate fn returning false for invalid', function () {
            var schema = {
                name: {
                    fn: function (v) { return v.length > 8000; },
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 'Goku' };
            chai_1.assert.isFalse(validate(user));
        });
    });
    describe('multiple validators', function () {
        it('should work with multiple validators', function () {
            var schema = {
                name: {
                    type: 'string',
                    test: /GOKU/,
                },
            };
            var validate = index_1.default(schema);
            var user = { name: 'Goku' };
            chai_1.assert.isFalse(validate(user));
        });
    });
});
//# sourceMappingURL=index.js.map