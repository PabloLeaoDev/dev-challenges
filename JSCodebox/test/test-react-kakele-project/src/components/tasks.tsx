import tasks from '../kakele-data/tasks.json';

function TasksList() {
  return (
    <>
      <h1>Tasks List</h1>

      {tasks.map((task) => (
        <div
        key={task.name}
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          maxWidth: '200px',
        }}
        >
          <p>Type: {task.type}</p>
          <p>Name: {task.name}</p>
          <p>Target: {task.target}</p>
          <p>Amount: {task.amount}</p>
          <p>Level: {task.level}</p>
          <p>Gold: {task.gold}</p>
          <p>Xp: {task.xp}</p>
        </div>
      ))}
    </>
  )
}

export default TasksList;
