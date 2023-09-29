import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import classes from './App.module.css'
import MainHeader from './layout/MainHeader';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {path: '', element: <HomePage />}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
