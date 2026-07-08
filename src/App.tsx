import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/produto/:id"
          element={<Product />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;