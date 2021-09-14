import { useContext } from "react";
import TodoList from "../Todo/TodoList";
import TodoForm from "../Todo/TodoForm";
import AuthContext from "../../store/auth-context";

const Todos = () => {
  const ctx = useContext(AuthContext);

  let completedTodos = ctx.todos.filter((todo) => todo.completed === true);
  let waitingTodos = ctx.todos.filter((todo) => todo.completed === false);

  return (
    <div>
      <h2>To-do's</h2>
      <h4>Waiting Tasks</h4>
      <TodoList
        todos={waitingTodos}
        toggleTaskComplete={ctx.onToggleTask}
        onRemoveTaskHandler={ctx.onRemoveTask}
      />
      <h4>Completed Tasks</h4>
      <TodoList
        todos={completedTodos}
        toggleTaskComplete={ctx.onToggleTask}
        onRemoveTaskHandler={ctx.onRemoveTask}
      />

      <TodoForm />
    </div>
  );
};

export default Todos;
