import logo from './logo.svg';
import './App.css';
import {Sidebar} from './Components/Sidebar';
import {Todo} from './Components/Todo';
import { Navbar } from './Components/Navbar';
import { Pages } from './Pages/Pages';

function App() {
  return (
    <>
    <Navbar/>

    <Pages/>
    </>
  );
}

export default App;
