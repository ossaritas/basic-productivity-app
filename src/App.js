import { useContext } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage";
import HomePage from "./components/Pages/HomePage";
import AuthContext from "./store/auth-context";
const App = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx.isLoggedIn);
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        {!ctx.isLoggedIn && <AuthPage />}
        {ctx.isLoggedIn && <HomePage logout={ctx.onLogout} />}
      </Route>
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default App;
