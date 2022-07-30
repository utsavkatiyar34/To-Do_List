import React, { useEffect } from 'react'
import'../Styles/todo.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import {v4} from 'uuid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToDoError, addToDoLoading, addToDoSuccess, getToDoError, getToDoLoading, getToDoSuccess } from '../Store/actions';
export const Todo = () => {
const [text, setText]= useState("");
const dispatch=useDispatch();
const {data} =  useSelector(state=> state.todo);

let reqGet=()=>{
  dispatch(getToDoLoading());
  axios({
  method:"get",
  url:"http://localhost:4000/todo"
  }).then((res)=>{
    dispatch(getToDoSuccess(res.data));
  }).catch((err)=>{
    dispatch(getToDoError());
  })
}
useEffect(()=>{
 reqGet();
},[])

let handleTodo=()=>{
  dispatch(addToDoLoading());
  axios({
    method:"post",
    url:"http://localhost:4000/todo",
    data:{
      title:text,
      status:false,
      id: v4(),
    }
    }).then((res)=>{
    dispatch(addToDoSuccess(res.data));
    }).catch((err)=>{
    dispatch(addToDoError);
    })        
}
  return (
    <>
    <input value={text} onChange={(e)=>setText(e.target.value)} className='inpfield' type='text'></input>
    <Button onClick={handleTodo} variant='solid' sx={{ color: 'white', backgroundColor: 'brown', borderColor: 'brown'  }}>Add To-Do</Button>
    {
       data.map((el)=>{
        return <h3 key={el.id}>{el.title}</h3>
      })
    }
    </>
  )
}
