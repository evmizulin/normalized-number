/* eslint-disable @typescript-eslint/no-explicit-any */
export const assert = (value: any) => {
    if (!value) {
        throw new Error(`Assertion failed: ${value} must be truthy.`);
    }
};
