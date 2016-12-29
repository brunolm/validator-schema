export default function createValidator(schema: Object) {
  const schemaKeys = Object.keys(schema);

  return function validate(o: Object): boolean {
    for (let key of schemaKeys) {
      let validations = Object.keys(schema[key]);

      for (let validation of validations) {
        let objectValue = o[key];
        let validationValue = schema[key][validation];

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
