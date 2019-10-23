import { FETCH_USER_BEGIN, FETCH_USER_SUCCSSES, FETCH_USER_ERROR } from '../../constants/fetchData';
import { ADD_ELEMENT, DELETE_ELEMENT } from '../../constants/ActionsType';

const initialState = {
    users: [],
    loading: false,
    error: null,

}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_BEGIN:
            {
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            }
        case FETCH_USER_ERROR:
            {
                return {
                    ...state,
                    loading: false,
                    error: action.hasErrored
                }
            }
        case FETCH_USER_SUCCSSES:
            {
                return {
                    ...state,
                    loading: false,
                    users: action.payload
                }
            }
        case ADD_ELEMENT:
            {
                return (Object.assign({}, state, {
                    users: [{
                        id: state.users.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                        createdAt: new Date(),
                        imageUrl: action.payload,
                        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/plasticine/128.jpg",
                        description: "SMTP Business-focused",
                        likes: 21777,
                        userName: "Alanis Ziemann"
                    }, ...state.users]
                }))
            }
        case DELETE_ELEMENT:
            {
                return {
                    ...state,
                    users: state.users.filter((oneUser) => oneUser.id !== action.payload),
                }
            }


        default:
            return state;
    }
}