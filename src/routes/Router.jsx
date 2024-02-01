import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Home from "../pages/Home";
import ShowDetails from "../pages/ShowDetails";
import MovieBookingForm from "../components/MovieBookingForm";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/show/:showId',
            element: <ShowDetails />
        },
        {
            path: '/movieBookingForm',
            element: <MovieBookingForm />
        },

      ]
    },
  ]);