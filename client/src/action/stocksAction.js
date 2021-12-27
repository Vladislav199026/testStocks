import { REQUEST_LOADING, REQUEST_SUCCESS} from '../constans'

export const requestLoading = () => ({
    type: REQUEST_LOADING,
});

export const requestSuccess = (payload) => ({
    type: REQUEST_SUCCESS,
    payload
});