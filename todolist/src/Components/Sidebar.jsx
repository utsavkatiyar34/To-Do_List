import React from 'react';
import '../Styles/Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

export const Sidebar = () => {
let handleLogout= ()=>{
  
}
const {data} =  useSelector(state=> state.todo);
  return (
    <>
    <div className='sidebar'>
     <h3>User Details</h3>
     {
       data.map((el)=>{
        return <div key={el.id}>{el.title}</div>
      })
    }
     <Button onClick={handleLogout}  variant='solid' sx={{ color: 'white', backgroundColor: 'brown', borderColor: 'brown'  }}>Logout</Button>
    </div>
    </>
  )
}
