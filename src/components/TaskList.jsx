import TaskItem from "./TaskItem";

export default function TaskList({task, onToggle}) {
  return (
    <div>
        <p>
            TaskList Component
        </p>
        {
            task.length>0? task.map((taskItem)=><TaskItem task={taskItem} onToggle={onToggle}/>):<p>Task List Empty</p>
        }
    </div>
  );
}