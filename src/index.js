import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

import { initializeApp } from "firebase/app";

import "./index.css";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyAkIMWUOMuFlhRIJVCRGwrThBcWTCZDc_s",
  authDomain: "react-productivity-app-56f40.firebaseapp.com",
  databaseURL:
    "https://react-productivity-app-56f40-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-productivity-app-56f40",
  storageBucket: "react-productivity-app-56f40.appspot.com",
  messagingSenderId: "122096437014",
  appId: "1:122096437014:web:ea2ebb0c8de74ac9d0b237",
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
