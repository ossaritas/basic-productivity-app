import { useState, useEffect } from "react";
import { mdiDelete, mdiAvTimer } from "@mdi/js";
import Icon from "@mdi/react";

const Countdown = (props) => {
  const calculateTimer = () => {
    let date = new Date(new Date());
    let startDate = date.getTime();
    let endDate = props.countdown;
    let difference = +endDate - +startDate;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    if (difference < 0) {
      timeLeft = difference;
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimer());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimer());
    }, 1000);
    return () => clearTimeout(timer);
  });
  // let finalOut = (
  //   <span>
  //     {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
  //     {timeLeft.seconds} seconds
  //   </span>
  // );
  // if (
  //   timeLeft.days === 0 &&
  //   timeLeft.hours === 0 &&
  //   timeLeft.minutes === 0 &&
  //   timeLeft.seconds === 0
  // ) {
  //   finalOut = <h2>Ended</h2>;
  // }

  return (
    <ul>
      <span>
        <Icon path={mdiAvTimer} size={0.75} />
      </span>
      <li>
        To {props.event} {timeLeft.days} days {timeLeft.hours} hours{" "}
        {timeLeft.minutes} minutes {timeLeft.seconds} seconds LEFT!
      </li>
      <button onClick={() => props.onRemoveTaskHandler(props.id)}>
        <Icon path={mdiDelete} size={0.7} />
      </button>
    </ul>
  );
};

export default Countdown;
