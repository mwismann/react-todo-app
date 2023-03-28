import TodoItem from "@/components/TodoItem";

const TodosList = ({ todos, handleChange, delTodo, setUpdates }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} handleChange={handleChange} delTodo={delTodo} setUpdates={setUpdates} />
      ))}
    </ul>
  );
};

export default TodosList;