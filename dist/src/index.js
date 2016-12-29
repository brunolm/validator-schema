"use strict";
function createValidator(schema) {
    var schemaKeys = Object.keys(schema);
    return function validate(o) {
        for (var _i = 0, schemaKeys_1 = schemaKeys; _i < schemaKeys_1.length; _i++) {
            var key = schemaKeys_1[_i];
            var validations = Object.keys(schema[key]);
            for (var _a = 0, validations_1 = validations; _a < validations_1.length; _a++) {
                var validation = validations_1[_a];
                var objectValue = o[key];
                var validationValue = schema[key][validation];
                switch (validation) {
                    case 'type':
                        if (typeof objectValue !== validationValue) {
                            return false;
                        }
                        break;
                    case 'test':
                        if (!validationValue.test(objectValue)) {
                            return false;
                        }
                        break;
                    case 'fn':
                        if (!validationValue(objectValue)) {
                            return false;
                        }
                        break;
                }
            }
        }
        return true;
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createValidator;
//# sourceMappingURL=index.js.map