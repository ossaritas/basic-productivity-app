import classes from "./Todo.module.css";
import { mdiDelete, mdiCheckboxBlankOutline, mdiCheckboxMarked } from "@mdi/js";
import Icon from "@mdi/react";

const Todo = (props) => {
  return (
    <ul className={classes.task}>
      <button onClick={() => props.toggleTaskComplete(props.id)}>
        {!props.completed ? (
          <Icon path={mdiCheckboxBlankOutline} color="green" size={0.75} />
        ) : (
          <Icon path={mdiCheckboxMarked} color="green" size={0.75} />
        )}
      </button>
      <li>{props.task}</li>
      <button onClick={() => props.onRemoveTaskHandler(props.id)}>
        <Icon path={mdiDelete} size={0.75} />
      </button>
    </ul>
  );
};

export default Todo;
