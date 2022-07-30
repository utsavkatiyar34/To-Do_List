import React from 'react'
import {Todo} from'../Components/Todo';
import '../App.css'
import { Sidebar } from '../Components/Sidebar';

export const Home = () => {
  return (
    <div className='.App'>
    <Sidebar/>
    <Todo />
    </div>
  )
}
