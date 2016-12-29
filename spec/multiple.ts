import { assert } from 'chai';
import validator, { Schema } from '../src/index';

describe('multiple validators', () => {
  it('should work with multiple validators', () => {
    const schema: Schema = {
      name: {
        type: 'string',
        test: /GOKU/,
        fn: v => -v === 100,
      },
    };
    const validate = validator(schema);

    const user = { name: 'Goku' };

    const result = validate(user);
    assert.isFalse(result.valid);
    assert.equal(result.errors.length, 1);
    assert.deepEqual(result.errors, [{ field: 'name', type: ['test', 'fn'] }]);
  });
});
