import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h3>Task Manager</h3>
      <TaskInput/>
      <TaskList task={[{text:"Task 1", completed:true},{text:"Task 1", completed:true},{text:"Task 1", completed:true}]}/>
    </div>
  )
}

export default App
