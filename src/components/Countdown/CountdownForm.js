import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";

const CountdownForm = (props) => {
  const ctx = useContext(AuthContext);

  const titleInputRef = useRef();
  const dateInputRef = useRef();
  const [date, setDate] = useState();

  const dateChangeHandler = (event) => {
    let date = event.target.value;
    let cc = new Date(date).toDateString();
    let ee = new Date(cc);
    let ff = ee.getTime();
    setDate(ff);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    const eventName = titleInputRef.current.value;
    const countdownDate = date;
    let eventId = Date.now();
    let id = eventId;

    ctx.onAddCountdown(id, eventName, countdownDate);
    titleInputRef.current.value = "";
    dateInputRef.current.value = null;
    id = "";
  };

  return (
    <form onSubmit={sumbitHandler}>
      <label id="tex">
        {" "}
        To <span></span>
        <input
          id="tex"
          type="text"
          placeholder="Add your event"
          required
          ref={titleInputRef}
        />
      </label>
      <label id="dat">
        <input
          required
          id="dat"
          onChange={dateChangeHandler}
          type="date"
          placeholder="Set your date"
          ref={dateInputRef}
        />
      </label>
      <button>Create a countdown</button>
    </form>
  );
};

export default CountdownForm;
