export interface Schema {
  [key: string]: {
    test?: RegExp;
    type?: string;
    required?: boolean;
    fn?: (val: any) => boolean;
  },
}

export default function createValidator(schema: Schema) {
  const schemaKeys = Object.keys(schema);

  return function validate(o: Object) {
    let errors = {};

    for (let schemaKey of schemaKeys) {
      let validations = Object.keys(schema[schemaKey]);

      for (let validationType of validations) {
        let objectValue = o[schemaKey];
        let validationValue = schema[schemaKey][validationType];

        let field = {
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

    const errorList = Object.keys(errors).reduce((a, err) => {
      a.push({ field: err, type: errors[err] });
      return a;
    }, []);
    return {
      valid: !errorList.length,
      errors: errorList,
    };
  };
}

function addError(errors, key, type) {
  errors[key] = errors[key] || [];
  errors[key].push(type);
}
