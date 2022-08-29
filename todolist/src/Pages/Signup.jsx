import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Button } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signupToDoError, signupToDoLoading, signupToDoSuccess } from '../Store/actions';
import { Navigate, NavLink } from 'react-router-dom';
export const Signup = () => {
const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [password, setPassword]=useState('');
const dispatch=useDispatch();
let handleSignUp=()=>{
        dispatch(signupToDoLoading());
axios({
      method: "post",
      url: "http://localhost:7000/register",
      data: {
        name:name,
        email:email,
        password:password
        
      },
}).then((res) => {
        dispatch(signupToDoSuccess());
      })
      .catch((err) => {
        dispatch(signupToDoError());
      });
}
const { token } = useSelector((state) => state.login); 
  if(token){
    return <Navigate to="/" /> 
  }

  return (
    <div className='signUp'>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inpfields"
          placeholder='Name'
          type="text"
        ></input>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inpfields"
          placeholder='Email'
          type="text"
        ></input>
        <input
          required
          value={password}
          name='number'
          onChange={(e) => setPassword(e.target.value)}
          className="inpfields"
          placeholder='Password'
          type="password"
        ></input>
         <Button  variant="solid"
         onClick={handleSignUp}
          sx={{
            color: "white",
            backgroundColor: "#900C3F",
            width:'30%',
            borderColor: "#900C3F",
            height:"3vw",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "#a0522d" },
          }}>Register</Button>
          <NavLink to="/login">Already Registered?<br></br>Login</NavLink>
     </div>
    
  )
}
