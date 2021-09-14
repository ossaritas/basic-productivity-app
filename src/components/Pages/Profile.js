import { useContext, useState } from "react";
import classes from "./Profile.module.css";
import AuthContext from "../../store/auth-context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const ctx = useContext(AuthContext);
  const [mail, setMail] = useState(ctx.userData[0].email);

  const handler = (event) => {
    setMail(event.target.value);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);
  };
  const cancelHandler = (e) => {
    setEdit(false);
  };

  return (
    <div>
      <form className={classes.user}>
        <ul>
          <li>
            <h4>E-mail</h4>
            <TextField
              id="outlined-basic"
              disabled={edit}
              value={mail}
              onChange={handler}
            />
          </li>

          <li>
            <h4>Password</h4>
            <TextField
              id="outlined-basic"
              disabled={edit}
              value={ctx.userData[0].password}
            />
          </li>
        </ul>
        <Button
          onClick={changeHandler}
          variant="contained"
          color="primary"
          type={edit ? "submit" : "button"}
        >
          {edit ? "Change your information" : "Save your data"}
        </Button>

        {!edit && (
          <Button
            style={{ margin: "10px" }}
            type="button"
            variant="contained"
            color="secondary"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        )}
      </form>
    </div>
  );
};

export default Profile;
