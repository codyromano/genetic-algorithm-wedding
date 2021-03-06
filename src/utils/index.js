import randFn from 'utils/rand';
import cloneObjectArrayFn from 'utils/array/cloneObjectArray';
import randFromArrayFn from 'utils/array/randFromArray';
import getIDFn from 'utils/getID';
import deepFreezeFn from 'utils/deepFreeze';
import meanFn from 'utils/math/mean';
import varianceFn from 'utils/math/variance';
import arraySwapFn from 'utils/array/arraySwap';
import arrayDiffFn from 'utils/array/arrayDiff';
import UniqueArrayFn from 'utils/array/UniqueArray';
import convertObjectArrayToHashMapFn from 'utils/array/convertObjectArrayToHashMap';
import debouncerFn from 'utils/debouncer';
import capitalizeFn from 'utils/capitalize';

export const rand = randFn;
export const cloneObjectArray = cloneObjectArrayFn;
export const randFromArray = randFromArrayFn;
export const getID = getIDFn;
export const deepFreeze = deepFreezeFn;
export const mean = meanFn;
export const variance = varianceFn;
export const arraySwap = arraySwapFn;
export const arrayDiff = arrayDiffFn;
export const UniqueArray = UniqueArrayFn;
export const debouncer = debouncerFn;
export const convertObjectArrayToHashMap = convertObjectArrayToHashMapFn;
export const capitalize = capitalizeFn;