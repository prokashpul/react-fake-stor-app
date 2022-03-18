import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
