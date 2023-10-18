import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import Result from "./pages/Result";


const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: "category", element: <CategoryPage /> },
  { path: 'result', element: <Result /> }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
