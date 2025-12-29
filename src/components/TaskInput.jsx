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
    <div>
        <p>
            TaskInput Component
        </p>
            <div>
    <form onSubmit={addNewTask}>
      <label>
        <input type="text" placeholder="Add new task..." onChange={handleChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
    </div>
    </div>
  );
}