import Ajv from "ajv";
import normalize from "ajv-error-messages";
// import { ValidationError } from "../exceptions/ValidationError";
// import { registerKeywords } from "./registerKeyWords";
import Error from "ajv-errors";

// instantiating the AJV
const ajv = new Ajv({ allErrors: true, $data: true });

// TODO: Why this
Error(ajv);

// Register custom key words
// registerKeywords(ajv);

/**
 * Validate given json against a schema
 * @param schema
 * @param data
 */
export const validate = async (schema: object, data: object): Promise<boolean> => {
    const test = ajv.compile(schema);
    try {
        if (!await test(data)) {
            throw new Error('validation error')
            // ValidationError("Validation Error", formatErrors(test.errors));
        }
    } catch (e) {
        console.log(e);
        e.errors.map((err) => {
            if (err.keyword === "required") {
                err.dataPath = err.params.missingProperty;
            } else if (err.keyword === "errorMessage") {
                err.dataPath = err.dataPath.replace("/", "");
            }
        });
        throw new Error('validation error')
        // ValidationError("Validation Error", formatErrors(e.errors));
    }
    return true;
};

const formatErrors = (errors: any[]) => {
    const errorsList = normalize(errors);
    if (Object.keys(errorsList.fields).length) {
        return Object.keys(errorsList.fields).reduce((acc, key) => {
            acc[key] = errorsList.fields[key][0];
            return acc;
        }, {});
    }
    return {};
};
