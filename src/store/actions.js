export const INCREASE_VAL = 'INCREASE_VAL';

export const counterIncrementor = (val) => {

    return {
        type: INCREASE_VAL,
        payload: val,
    };
};