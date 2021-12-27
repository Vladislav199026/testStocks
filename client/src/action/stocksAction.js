import { FETCH_LOADING, FETCH_SUCCESS} from '../constans'

export const fetchPostsLoading = () => ({
    type: FETCH_LOADING,
});

export const fetchPostsSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    payload
});