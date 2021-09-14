import { createContext, useState } from "react";
const AuthContext = createContext({
  countFormData: [],
  todos: [],
  userData: [],
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
  onAddTask: () => {},
  onToggleTask: () => {},
  onRemoveTask: () => {},
  onAddCountdown: () => {},
  onRemoveCountd: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [countFormData, setCountFormData] = useState([]);

  const loginHandler = (userD) => {
    setUserData(userD);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUserData({});
  };
  const addTaskHandler = (enteredTaskName, id, completed) => {
    setTodos((prevState) => [
      ...prevState,
      { task: enteredTaskName, id: id, completed: completed },
    ]);
  };

  const toggleTaskHandler = (id) => {
    const updatedTask = [...todos];
    let objIndex = updatedTask.findIndex((obj) => obj.id === id);
    updatedTask[objIndex].completed = !updatedTask[objIndex].completed;
    setTodos(updatedTask);
  };

  const removeTaskHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addCountdownHandler = (id, eventName, countdownDate) => {
    setCountFormData((prevState) => [
      ...prevState,
      { id: id, eventName: eventName, countdownDate: countdownDate },
    ]);
  };
  const removeCountdownHandler = (id) => {
    const updatedCountdowns = countFormData.filter((todo) => todo.id !== id);
    setCountFormData(updatedCountdowns);
  };

  const contextValue = {
    countFormData: countFormData,
    todos: todos,
    userData: userData,
    isLoggedIn: isLoggedIn,
    onLogin: loginHandler,
    onLogout: logoutHandler,
    onAddTask: addTaskHandler,
    onToggleTask: toggleTaskHandler,
    onRemoveTask: removeTaskHandler,
    onAddCountdown: addCountdownHandler,
    onRemoveCountd: removeCountdownHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
