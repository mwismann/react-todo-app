import TodoItem from "@/components/TodoItem";

const TodosList = ({ todos, handleChange, delTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );
};

export default TodosList;