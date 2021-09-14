import Countdown from "./Countdown";

const CountdownList = (props) => {
  return (
    <div>
      {props.events.map((eventt) => (
        <Countdown
          key={eventt.id}
          id={eventt.id}
          event={eventt.eventName}
          countdown={eventt.countdownDate}
          onRemoveTaskHandler={props.onRemoveTaskHandler}
        />
      ))}
    </div>
  );
};

export default CountdownList;
