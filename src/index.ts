import { assert } from './assert';

type TProps = {
    sourceValue: number;
    sourceRange: [number, number];
    targetRange: [number, number];
};

export const normalizedNumber = ({ sourceValue, sourceRange, targetRange }: TProps) => {
    const [min, max] = sourceRange;
    const [nMin, nMax] = targetRange;

    assert(min < max);
    assert(nMin <= nMax);

    assert(sourceValue >= min);
    assert(sourceValue <= max);

    const result = ((sourceValue - min) * (nMax - nMin)) / (max - min) + nMin;

    return Math.min(Math.max(result, nMin), nMax);
};
