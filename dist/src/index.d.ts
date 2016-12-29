export interface Schema {
    [key: string]: {
        test?: RegExp;
        type?: string;
        required?: boolean;
        fn?: (val: any) => boolean;
    };
}
export default function createValidator(schema: Schema): (o: Object) => {
    valid: boolean;
    errors: any[];
};
