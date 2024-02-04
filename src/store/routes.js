import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Todos from "../components/Todos/Todos";
import Registration from "../pages/Registration/Registration";
import RootLayout from "../layouts/RootLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { element: <Home />, index: true },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
    ],
  },

  { path: "/header", element: <Header /> },
  { path: "/footer", element: <Footer /> },
]);

/*
[
  {
    path:
    element:
    errorElement:
    children: [{path: , element: }]
  }
]
*/
