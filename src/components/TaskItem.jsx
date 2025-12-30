export default function TaskItem({task, onToggle}) {
  return (
    // <div style={{"border-bottom": "2px solid gray", "alignContent":"flex-start", "margin-top":12, "padding-bottom":4}}>
    <div style={{ "borderBottom": "2px solid gray", "marginTop":12, "paddingBottom":4}}>
    
    <li className="no-bullets">
      <label>
        <input type="checkbox"  checked={task.completed} onChange={() => onToggle(task.id)} />
        <span style={{"marginLeft":8}}>{task.text}</span>
      </label>
    </li>
    </div>
  );
}