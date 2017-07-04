import randFn from 'utils/rand';
import cloneObjectArrayFn from 'utils/array/cloneObjectArray';
import randFromArrayFn from 'utils/array/randFromArray';
import getIDFn from 'utils/getID';
import deepFreezeFn from 'utils/deepFreeze';
import meanFn from 'utils/math/mean';
import varianceFn from 'utils/math/variance';
import arraySwapFn from 'utils/array/arraySwap';
import debouncerFn from 'utils/debouncer';

export const rand = randFn;
export const cloneObjectArray = cloneObjectArrayFn;
export const randFromArray = randFromArrayFn;
export const getID = getIDFn;
export const deepFreeze = deepFreezeFn;
export const mean = meanFn;
export const variance = varianceFn;
export const arraySwap = arraySwapFn;
export const debouncer = debouncerFn;