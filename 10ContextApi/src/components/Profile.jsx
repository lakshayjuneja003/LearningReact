import React,{useState, useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    // conditional returning
    if(!user) return <div>Please Login</div>
    else {
    return <div> Welcome {user.username}</div>
    }
  
}

export default Profile