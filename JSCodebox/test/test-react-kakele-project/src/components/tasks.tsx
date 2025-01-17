import tasks from '../kakele-data/tasks.json';
import styles from '../assets/styles/Lists.module.css';

function TasksList() {
  return (
    <>
      <div className={styles.container}>
        <h1>Tasks List</h1>
        <div className={styles.container}>
          {tasks.map((task) => (
            <div
            key={task.name}
            className={styles.card}
            >
              <p className={styles.stats}>Type: {task.type}</p>
              <p className={styles.name}>Name: {task.name}</p>
              <p className={styles.stats}>Target: {task.target}</p>
              <p className={styles.stats}>Amount: {task.amount}</p>
              <p className={styles.stats}>Level: {task.level}</p>
              <p className={styles.stats}>Gold: {task.gold}</p>
              <p className={styles.stats}>Xp: {task.xp}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TasksList;
