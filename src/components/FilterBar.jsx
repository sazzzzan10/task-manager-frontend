import TaskItem from "./TaskItem";

const filterList=[{
    title:"active",
    value:true    
},
{
    title:"completed",
    value:false    
},
{
    title:"all", 
    value:true   
},
]
export default function FilterBar({selectedFilter, filterHandler}) {
  return (
    <div className="filters" style={{ "marginTop":12}} >

        {
            filterList.map((filter)=><div key={filter.title} onClick={()=>filterHandler(filter)} style={{"padding":8,"minWidth":50,"textAlign":"center", cursor:"pointer",borderRadius:8, "border":"2px solid gray","marginLeft":12, backgroundColor:selectedFilter.title===filter.title?"#777777":"transparent", color:selectedFilter.title===filter.title?"white":"white"}} className="filters-button">{filter.title}</div>)
        }
    </div>
  );
}