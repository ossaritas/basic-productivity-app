import { useContext } from "react";
import CountdownForm from "./CountdownForm";
import CountdownList from "./CountdownList";
import AuthContext from "../../store/auth-context";

const Countdowns = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <CountdownList
        onRemoveTaskHandler={ctx.onRemoveCountd}
        events={ctx.countFormData}
      />

      <CountdownForm />
    </div>
  );
};

export default Countdowns;
