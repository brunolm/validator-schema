import { assert } from 'chai';
import validator from '../src/index';

describe('validator-schema', () => {
  describe('type', () => {
    it('should validate type returning true for valid', () => {
      const schema = {
        name: {
          type: 'string',
        },
      };
      const validate = validator(schema);

      const user = { name: 'Goku' };

      assert.isTrue(validate(user));
    });

    it('should validate type returning false for invalid', () => {
      const schema = {
        name: {
          type: 'string',
        },
      };
      const validate = validator(schema);

      const user = { name: 2 };

      assert.isFalse(validate(user));
    });
  });

  describe('test', () => {
    it('should validate test returning true for valid', () => {
      const schema = {
        name: {
          test: /goku/i,
        },
      };
      const validate = validator(schema);

      const user = { name: 'Goku' };

      assert.isTrue(validate(user));
    });

    it('should validate test returning false for invalid', () => {
      const schema = {
        name: {
          test: /GOKU/,
        },
      };
      const validate = validator(schema);

      const user = { name: 'Goku' };

      assert.isFalse(validate(user));
    });
  });

  describe('fn', () => {
    it('should validate fn returning true for valid', () => {
      const schema = {
        name: {
          fn: v => v.length === 4,
        },
      };
      const validate = validator(schema);

      const user = { name: 'Goku' };

      assert.isTrue(validate(user));
    });

    it('should validate fn returning false for invalid', () => {
      const schema = {
        name: {
          fn: v => v.length > 8000,
        },
      };
      const validate = validator(schema);

      const user = { name: 'Goku' };

      assert.isFalse(validate(user));
    });
  });

  describe('multiple validators', () => {
    it('should work with multiple validators', () => {
      const schema = {
        name: {
          type: 'string',
          test: /GOKU/,
        },
      };
      const validate = validator(schema);

      const user = { name: 'Goku' };

      assert.isFalse(validate(user));
    });
  });
});
