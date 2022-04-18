import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import {  selectuser } from '../features/userSlice';

function Profiles() {
    const user=useSelector(selectuser);
  return (
    <div className='profile'>
        <Navbar/>
        <div className="body">
            <h1>Edit Profile</h1>
            <div className="screeninfo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="details">
                    <h2>{user.email}</h2>
                    <div className="profilescreen">
                        <button className="logoutbtn">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profiles
