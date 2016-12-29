# validator-schema

Install (already includes TypeScript definition file).

```
npm i -S validator-schema
```

## Schema validation example

```ts
const schema = {
  name: {
    type: 'string',
    test: /goku/i,
    fn: v => v && v.length > 0,
  },
};

const validate = validator(schema);

const user = {
  name: 'Goku',
};

validate(user); // true
```

See [tests](spec) for more examples.
