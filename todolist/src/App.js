import logo from './logo.svg';
import './App.css';
import {Sidebar} from './Components/Sidebar';
import {Todo} from './Components/Todo';

function App() {
  return (
    <div className="App">
    <h2>To-Do List</h2>
    <Sidebar/>
    <Todo/>
    </div>
  );
}

export default App;
