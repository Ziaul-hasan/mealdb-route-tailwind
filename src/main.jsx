import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './Components/Home/Home';
import FoodDetails from './Components/Home/FoodDetails/FoodDetails';
import Chicken from './Components/Chicken/Chicken';
import Beef from './Components/Beef/Beef';
import Fish from './Components/Fish/Fish';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path: "foodDetails/:foodId",
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      },
      {
        path: "chicken",
        element: <Chicken></Chicken>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      },
      {
        path: "beef",
        element: <Beef></Beef>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
      },
      {
        path: "fish",
        element: <Fish></Fish>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
