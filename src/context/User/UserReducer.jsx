import { GET_USER, GET_PROFILE } from '../types'

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USER:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        default:
            return state;
    }
}
