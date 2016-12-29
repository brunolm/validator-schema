import { assert } from 'chai';
import validator, { Schema } from '../src/index';

describe('required', () => {
  it('should validate required returning true for valid', () => {
    const schema: Schema = {
      name: {
        required: true,
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isTrue(result.valid);
    assert.equal(result.errors.length, 0);
  });

  it('should validate required returning false for invalid', () => {
    const schema: Schema = {
      name: {
        required: true,
      },
    };
    const validate = validator(schema);

    const user = { name: '' };

    const result = validate(user);
    assert.isFalse(result.valid);
    assert.equal(result.errors.length, 1);
  });
});
