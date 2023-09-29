import { createBrowserRouter, RouterProvider } from "react-router-dom";
import classes from "./App.module.css";
import MainHeader from "./layout/MainHeader";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([{ path: "", element: <HomePage /> }]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
