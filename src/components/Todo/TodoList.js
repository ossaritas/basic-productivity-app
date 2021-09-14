import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          toggleTaskComplete={props.toggleTaskComplete}
          onRemoveTaskHandler={props.onRemoveTaskHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
