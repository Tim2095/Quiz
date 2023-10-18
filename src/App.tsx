import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";


const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: "category", element: <CategoryPage /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
