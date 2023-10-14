import logo from './logo.svg';
import './App.css';
import Header  from './Components/Header';
import ToDo from './Components/ToDo';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);

  function addItem(item) {
    console.log(item);
    setItems( (PrevItems) => {
      return [...PrevItems, item]
    });
  }
  return (
    <div>
    <Header />
    <div className='todo-container'>
    <h1>Add tasks</h1>
    <ToDo addItem={addItem}/>
    <ul>
     { items.map(item => (
      <li> {item}</li>
     ))}
    </ul>
    </div>
    </div>
  );
}

export default App;
