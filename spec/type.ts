import { assert } from 'chai';
import validator, { Schema } from '../src/index';

describe('type', () => {
  it('should validate type returning true for valid', () => {
    const schema: Schema = {
      name: {
        type: 'string',
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isTrue(result.valid);
    assert.equal(result.errors.length, 0);
  });

  it('should validate type returning false for invalid', () => {
    const schema: Schema = {
      name: {
        type: 'string',
      },
    };
    const validate = validator(schema);

    const user = { name: 2 };

    const result = validate(user);
    assert.isFalse(result.valid);
    assert.equal(result.errors.length, 1);
  });
});
