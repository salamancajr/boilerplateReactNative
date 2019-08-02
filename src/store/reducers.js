import { INCREASE_VAL } from './actions';

export const CounterReducer = (state = 0, action) => {
    switch (action.type) {
    case INCREASE_VAL:
        return state + action.payload;
    default:
        return state;
    }
};