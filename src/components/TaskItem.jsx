export default function TaskItem({task, onToggle}) {
  return (
    <div>
    <p> Task Item Component</p>
    <li>
      <label>
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        {task.text}
      </label>
    </li>
    </div>
  );
}