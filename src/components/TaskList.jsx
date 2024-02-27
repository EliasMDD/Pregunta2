export const TaskList = ({ tasks }) => {
    return (
    <ul className="task-list">
    {tasks.map(task => (
        <li
        key={task.id}
        className={task.completed ? 'completed' : ''}
        >
            {task.text}
        </li>
        ))}
    </ul>
    );
}