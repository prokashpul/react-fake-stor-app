import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const cartCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Header count={count}></Header>
      <Products cartCount={cartCount}></Products>
    </div>
  );
}

export default App;
