import React from 'react';
import '../Styles/Sidebar.css';
import Button from '@mui/material/Button';

export const Sidebar = () => {
let handleLogout= ()=>{

}
  return (
    <>
    <div className='sidebar'>
     <h3>User Details</h3>
     <Button onClick={handleLogout}  variant='solid' sx={{ color: 'white', backgroundColor: 'brown', borderColor: 'brown'  }}>Logout</Button>
    </div>
    </>
  )
}
