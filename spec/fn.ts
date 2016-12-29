import { assert } from 'chai';
import validator from '../src/index';

describe('fn', () => {
  it('should validate fn returning true for valid', () => {
    const schema = {
      name: {
        fn: v => v.length === 4,
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isTrue(result.valid);
    assert.equal(result.errors.length, 0);
  });

  it('should validate fn returning false for invalid', () => {
    const schema = {
      name: {
        fn: v => v.length > 8000,
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isFalse(result.valid);
    assert.equal(result.errors.length, 1);
  });
});
