import { Header } from "components";
import { Routes, Route } from "react-router-dom";
import { ProductPage, Cart } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
