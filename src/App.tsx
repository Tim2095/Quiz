import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
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
