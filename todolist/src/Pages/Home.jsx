import React from 'react'
import '../App.css'
import {useDispatch, useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { Button } from '@mui/material';
import { logOut } from "../Store/actions";


export const Home = () => {
 
  const dispatch=useDispatch(); 
  const { token, user } = useSelector((state) => state.login); 
  if(!token){
    return <Navigate to="/login" /> 
  }
  
  
  return (
    <div className='.App'>
    <h2 style={{textAlign:"center"}}>{user.name}</h2>
    <h2 style={{textAlign:"center"}}>{user.email}</h2>
    <Button
          variant="solid"
          onClick={()=>{dispatch(logOut())}}
          sx={{
            color: "white",
            backgroundColor: "#900C3F",
            width: "10%",
            borderColor: "#900C3F",
            height: "25px",
            marginTop:'2vw',
            marginLeft:"45%",
            marginRight:"auto",
            "&:hover": { backgroundColor: "#a0522d" },
          }}
        >
          Logout
        </Button>
    </div>
  )
}
