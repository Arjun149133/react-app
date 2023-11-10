import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Error from './components/Error';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from './components/Home';
import Attendence from './components/Attendence';
import Permission from './components/Permission';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      // cacheTime: 1000,
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/attendence",
    element: <Attendence />,
    errorElement: <Error/>,
  },
  {
    path: "/permission",
    element: <Permission />,
    errorElement: <Error/>,
  },
]);

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
export default App
