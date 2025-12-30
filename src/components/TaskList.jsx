import TaskItem from "./TaskItem";

export default function TaskList({task, onToggle}) {
    console.log("tasklist ", task?.length, task)
  return (
    <div>

        {
            task?.length>0? task?.map((taskItem)=><TaskItem key={taskItem.id} task={taskItem} onToggle={onToggle}/>):<p>Task List Empty</p>
        }
    </div>
  );
}