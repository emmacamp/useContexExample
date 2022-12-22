import React, { useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext';



const UserList = () => {
    const { users, getUsers, getProfile } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="list-group h-100 ">
            {
                users.map(user => (
                    <a key={user.id} href="#!" className='d-flex bg-primary text-white justify-content-center m-0 p-4 mt-4' onClick={() => getProfile(user.id)}>
                        <img src={user.avatar} alt="" className='img-fluid mr-4 rounded-circle ' width={70} />
                        <p>
                            {`${user.first_name} ${user.last_name}`}
                        </p>
                    </a>
                ))

            }
        </div>
    )
}

export default UserList;