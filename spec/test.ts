import { assert } from 'chai';
import validator from '../src/index';

describe('test', () => {
  it('should validate test returning true for valid', () => {
    const schema = {
      name: {
        test: /goku/i,
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isTrue(result.valid);
    assert.equal(result.errors.length, 0);
  });

  it('should validate test returning false for invalid', () => {
    const schema = {
      name: {
        test: /GOKU/,
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isFalse(result.valid);
    assert.equal(result.errors.length, 1);
  });
});
