import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

const TodoForm = () => {
  const ctx = useContext(AuthContext);
  const taskInputRef = useRef();

  const addTaskHandler = (event) => {
    event.preventDefault();
    const enteredTaskName = taskInputRef.current.value;
    const taskId = Date.now();
    let id = taskId;
    const completed = false;
    ctx.onAddTask(enteredTaskName, id, completed);
    taskInputRef.current.value = "";
    id = "";
  };

  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <label id="todo"></label>
        <input
          id="todo"
          name="todo"
          type="text"
          placeholder="Enter a new task"
          ref={taskInputRef}
        />

        <button>Add a Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
