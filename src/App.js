import { Route, Routes } from "react-router-dom";

import Template from "./components/template/index.js";
import Burger from "./pages/pageBurger/index.js";
import Home from "./pages/pageHome/index.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/burger" element={<Burger/>} />
      </Route>
    </Routes>
  );
}

export default App;
