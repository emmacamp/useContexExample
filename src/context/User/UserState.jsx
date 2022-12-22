import React, { useReducer } from 'react';

// Dependences
import axios from 'axios';

//components
import UserReducer from './UserReducer';
import UserContext from './UserContext';



const UserState = ({ children }) => {
    const intialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, intialState);

    const getUsers = async () => {
        await axios.get("https://reqres.in/api/users")
            .then(res => {
                dispatch({
                    type: 'GET_USER',
                    payload: res.data.data
                })
            })
            .catch(err => console.log(err))
    }


    const getProfile = async (id) => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        // console.log(res);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {children}
        </UserContext.Provider>
    )

}


export default UserState;
