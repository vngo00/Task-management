import React from "react";
import { useState } from 'react';
import ToDo from '../Components/ToDo';
import Card from '../Components/Card';




function Home() {
    const [items, setItems] = useState([]);

  function addItem(item) {
    console.log(item);
    setItems( (PrevItems) => {
      return [...PrevItems, item]
    });
  }

  function deleteItem(id) {
    console.log(id);
    setItems( (oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      })
    })
    }
    return <div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-4 outliner'>
        <h1>Add tasks</h1>
    <ToDo addItem={addItem}/>
    {items.map( (item, index) => (
      <Card item={item} index={index} deleteItem={deleteItem}/>
    ))}
   
        </div>
        <div className='col-lg-4 outliner'>
          <h1>In Progress</h1>
        </div>
        <div className='col-lg-4 outliner'>
          <h1>Completed</h1>
        </div>
    </div>
  </div>;
    
}



export default Home;