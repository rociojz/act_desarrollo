import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./componentes/Details";
import Layout from "./componentes/Layout";
import Libros from "./componentes/ListadoLibros";
import Home from "./componentes/Home";

function Router() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="libros" element={<Libros />}></Route>
            <Route path="libros/:id" element={<Details />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
