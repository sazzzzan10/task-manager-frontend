import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

function App() {
  const [tasks, setTasks] = useState(() => {
  const stored = localStorage.getItem('tasks');
  return stored ? JSON.parse(stored) : [];
})
  const [selectedFilter, setSelectedFilter] = useState({title:'all', value:true});

// useEffect(() => {
//   const stored = localStorage.getItem('tasks');
//   if (stored) setTasks(JSON.parse(stored));
// }, []);
useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
const addTasksHandler =(newTask)=>{
  setTasks(prevState=>[...prevState,newTask])
}

const onCompletedToggle=(id)=>{
  setTasks(prevState=>prevState.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ))
}
const filterHandler=(filter)=>{
  setSelectedFilter(filter);
}
  return (
    <div style={{"border":"2px solid gray", padding:12}}>
    <h3>Task Manager</h3>
      <TaskInput onAdd={addTasksHandler} prevId={tasks?.length>0?tasks[tasks.length-1].id:-1}/>
      <TaskList task={tasks} onToggle={onCompletedToggle} selectedFilter={selectedFilter}/>
      <FilterBar filterHandler={filterHandler} selectedFilter={selectedFilter}/>
    </div>
  )
}

export default App
