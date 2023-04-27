import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Nav, Footer } from "./NavFooter";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "quiz",
    element: <Quiz/>,
  }
]);

function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
