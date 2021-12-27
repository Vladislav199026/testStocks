import { FETCH_LOADING, FETCH_SUCCESS } from '../constans';

const initialState = {
    coins: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return {
                coins: [...state.coins]
            };

        case FETCH_SUCCESS:
            return {
                coins: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;