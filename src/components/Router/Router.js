import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    ]
  },
]);