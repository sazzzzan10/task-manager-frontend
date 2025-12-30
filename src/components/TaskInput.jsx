import { useState } from "react";

export default function TaskInput({prevId,onAdd}) {
    const [newTask,setNewTask] = useState("")
      const handleChange = (event) => {
    // Update the 'name' state with the current value of the input field
    setNewTask(event.target.value);
  };
    const addNewTask=(event)=>{
          event.preventDefault(); 
          onAdd({id:prevId+1, text:newTask, completed:false})
    } 
  return (
    // <div  style={{"border":"1px solid gray", "padding":8,"margin-bottom":12}}>
    <div   className="task-input" style={{"border":"1px solid gray","padding":8,"marginBottom":12}}>

    <form onSubmit={addNewTask}>
      <label>
        <input style={{"padding":8,"marginRight":12}} type="text" placeholder="Add new task..." onChange={handleChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
}