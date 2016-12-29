"use strict";
function createValidator(schema) {
    var schemaKeys = Object.keys(schema);
    return function validate(o) {
        var errors = {};
        for (var _i = 0, schemaKeys_1 = schemaKeys; _i < schemaKeys_1.length; _i++) {
            var schemaKey = schemaKeys_1[_i];
            var validations = Object.keys(schema[schemaKey]);
            for (var _a = 0, validations_1 = validations; _a < validations_1.length; _a++) {
                var validationType = validations_1[_a];
                var objectValue = o[schemaKey];
                var validationValue = schema[schemaKey][validationType];
                var field = {
                    field: schemaKey,
                    type: validationType,
                };
                switch (validationType) {
                    case 'required':
                        if (!objectValue && objectValue !== 0) {
                            addError(errors, schemaKey, validationType);
                        }
                        break;
                    case 'type':
                        if (typeof objectValue !== validationValue) {
                            addError(errors, schemaKey, validationType);
                        }
                        break;
                    case 'test':
                        if (!validationValue.test(objectValue)) {
                            addError(errors, schemaKey, validationType);
                        }
                        break;
                    case 'fn':
                        if (!validationValue(objectValue)) {
                            addError(errors, schemaKey, validationType);
                        }
                        break;
                }
            }
        }
        var errorList = Object.keys(errors).reduce(function (a, err) {
            a.push({ field: err, type: errors[err] });
            return a;
        }, []);
        return {
            valid: !errorList.length,
            errors: errorList,
        };
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createValidator;
function addError(errors, key, type) {
    errors[key] = errors[key] || [];
    errors[key].push(type);
}
//# sourceMappingURL=index.js.map