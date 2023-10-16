import React from "react";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';




function Card(props) {

    function handleDelete() {
        props.deleteItem(props.index);
    }
    return  <div class="card border-success mb-3 task-card" >
    <div class="card-header bg-transparent border-success">{props.index}</div>
    <div class="card-body text-success">
      
      <p class="card-text">{props.item}</p>
    </div>
    <div class="card-footer bg-transparent border-success"><DeleteSharpIcon onClick={handleDelete} /></div>
  </div>;
}

export default Card;