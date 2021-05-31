import React, {useContext} from 'react'
import { Redirect } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import { UserContext } from '../utils/UserContext'

const Profile = () => {

    const {user, setUser} = useContext(UserContext)

    if (!user) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <NavigationBar loggedin={user} func={() => setUser(null)}/>
            <div className='profile-box'>
                <h1>{user.username}</h1>
                <p>Your profile</p>
                <br />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">First Name: {user.firstName}</li>
                    <li className="list-group-item">Last Name: {user.lastName}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                    <li className="list-group-item">Posts: 0</li>
                    <li className="list-group-item">Acheivement Level: newbie</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
