export default function createValidator(schema: Object): (o: Object) => {
    valid: boolean;
    errors: any[];
};
