const TodoItem = ({ item, handleChange, delTodo }) => {
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => handleChange(item.id)} />
      <button onClick={() => delTodo(item.id)}>Delete</button>
      {item.title}
    </li>
  );
};

export default TodoItem;