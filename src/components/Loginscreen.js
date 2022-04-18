import React, { useRef } from 'react'
import { auth } from '../Firebase';
import'./Loginscreen.css'

function Loginscreen() {

  const emailref=useRef(null);
  const passref=useRef(null);

  const signup=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      passref.current.value
    ).then((authUser)=>{
      // console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    });
  };
  const login=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passref.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    });
  }
  return (
    <div className='screen'>
        <h2>Sign In</h2>
        <form action="">
            <input ref={emailref} type="email" name="" id="" placeholder='Email or phone number' />
            <input ref={passref} type="password" name="" id="" placeholder='Password' />
            <button type='submit' onClick={login}>Sign In</button>
        </form>
       <div className='one'> <span className='span'> <input type="checkbox" name="" id="" /> Remember me</span>
       <a href="/" className='bcol'>Need help?</a></div>
       <span className='bcol'>
        New to Netflix? <a href="/" onClick={signup}> Sign up now.</a>
       </span>
        <p className='bcol'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="/">Learn more.</a>
        </p>
    </div>
  )
}

export default Loginscreen
