import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext';
const Profile = () => {
    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {
                selectedUser
                    ? (
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={selectedUser
                                            .avatar} alt="" className='img-fluid rounded-circle' />
                                    </div>
                                    <div className="col-md-8">
                                        <h3>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h3>
                                        <p>{selectedUser.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : null
            }
        </>
    )
}
export default Profile;