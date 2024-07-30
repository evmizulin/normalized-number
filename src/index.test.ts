import { describe, expect, it } from '@jest/globals';
import { normalizedNumber } from '.';

describe('normalize', () => {
    it('true', () => {
        const result = normalizedNumber({
            sourceValue: 499,
            sourceRange: [450, 550],
            targetRange: [0, 100],
        });

        expect(result).toBe(49);
    });
});
