import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';

const TodoItem = ({ item, handleChange, delTodo, setUpdates }) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(item.title);

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  (editing) ? viewMode.display = 'none' : editMode.display = 'none';

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setUpdates(updateInput, item.id);
      setEditing(false);
    }
  }

  return (
    <li className={styles.item} >
      <div className={styles.content} style={viewMode} >
        <input type="checkbox" checked={item.completed} onChange={() => handleChange(item.id)} />
        <button onClick={handleEditing} >Edit</button>
        <button onClick={() => delTodo(item.id)}>Delete</button>
        <span className={item.completed ? styles.completedTask : null} >
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone} />
    </li>
  );
};

export default TodoItem;