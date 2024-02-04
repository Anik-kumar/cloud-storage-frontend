import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./store/routes";
import { useState } from "react";
// import Home from './pages/Home/Home';
// import Todos from './components/Todos/Todos';
// import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    // <div className="App">
    //   <AddTodo />
    //   <Todos />
    // </div>
    <RouterProvider router={routes} />
  );
}

export default App;
