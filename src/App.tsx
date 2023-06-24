import React from "react";
import { RouterProvider } from "react-router-dom";
import { Nav, Footer } from "./NavFooter";
import {router} from "./router"



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
