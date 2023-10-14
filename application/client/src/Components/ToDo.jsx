import React, { useState } from "react";


function ToDo(props) {
    const [content, setContent] = useState("");

    function handleInput(event) {
        console.log(event.target.value);
        setContent(event.target.value);
    }

    function addItem(event) {
        props.addItem(content);
        setContent("");
        event.preventDefault();
    }

     
    return    <form>
            <input onInput={handleInput} name="todo" placeholder="add your task" value={content}></input>
            <button onClick={addItem}>Add</button>
        </form>;
}



export default ToDo;