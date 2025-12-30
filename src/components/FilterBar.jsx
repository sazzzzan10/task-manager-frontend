import TaskItem from "./TaskItem";

const filterList=[{
    title:"active",    
},
{
    title:"completed",    
},
{
    title:"  all  ",    
},
]
export default function FilterBar({task, filterHandler}) {
    console.log("tasklist ", task?.length, task)
  return (
    <div style={{"display":"flex", "marginTop":12}}>

        {
            filterList.map((filter)=><div key={filter.title} onClick={()=>filterHandler(filter)} style={{"padding":8,"minWidth":50,"textAlign":"center", cursor:"pointer",borderRadius:8, "border":"2px solid gray","marginLeft":12}}>{filter.title}</div>)
        }
    </div>
  );
}