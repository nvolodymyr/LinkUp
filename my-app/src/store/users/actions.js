import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCSSES,
    FETCH_USER_ERROR
} from '../../constants/fetchData';
import {
    ADD_ELEMENT,
    DELETE_ELEMENT
} from '../../constants/ActionsType';

export const fetchUserLoading = (bool) => ({
    type: FETCH_USER_BEGIN,
    isLoading: bool
});
export const fetchUserError = (bool) => ({
    type: FETCH_USER_ERROR,
    hasErrored: bool
});
export const fetchUserSuccsses = users => ({
    type: FETCH_USER_SUCCSSES,
    payload: users,

});
export const addNewElement = (urlText) => ({
    type: ADD_ELEMENT,
    payload:urlText,
});
export const deleteElement = id => ({
    type: DELETE_ELEMENT,
    payload: id,
});


export function usersFetchData(url) {
    return (dispatch) => {
        dispatch(fetchUserLoading(true));

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(fetchUserLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchUserSuccsses(items)))
            .catch(() => dispatch(fetchUserError(true)));
    };
}