import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({task, onToggle, selectedFilter={title:"all"}}) {
    // const [visibleTasks, setVisibleTasks]=useState(task)
    const visibleTasks= selectedFilter.title=="all"?task:task.filter((taskItem)=>taskItem.completed==selectedFilter.value)
    // useEffect(()=>{
    //  const newList= selectedFilter.title=="all"?task:task.filter((taskItem)=>taskItem.completed==selectedFilter.value)
    //  setVisibleTasks(newList);

    // },[selectedFilter])
  return (
    <div className="task-list">

        {
            visibleTasks?.length>0? visibleTasks?.map((taskItem)=><TaskItem key={taskItem.id} task={taskItem} onToggle={onToggle}/>):<p>Task List Empty</p>
        }
    </div>
  );
}