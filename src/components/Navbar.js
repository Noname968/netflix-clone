import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../Firebase';
import netflix from '../netflix.png'
import './Navbar.css'

function Navbar() {
  const history= useHistory();
  const [show,setshow]= useState(false);
  const transition=()=>{
    if(window.scrollY>100){
      setshow(true);
    }
    else{
      setshow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transition);
    return()=>window.removeEventListener('scroll',transition);
  },[]);

  return (
    <div className={`nav ${show && 'navblk'}`} >
      <div className="navcontent">
      <img onClick={()=>history.pushState("/")} className="navlogo" src={netflix} alt="" />
      <button className='logoutnav' onClick={()=>auth.signOut()}>Logout</button>
      <img className='navavatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar
