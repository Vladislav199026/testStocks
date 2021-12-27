import { REQUEST_LOADING, REQUEST_SUCCESS } from '../constans';

const initialState = {
    coins: [],
};

const stockReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LOADING:
            return {
                coins: [...state.coins]
            };

        case REQUEST_SUCCESS:
            return {
                coins: action.payload,
            };
        default:
            return state;
    }
};

export default stockReducer;