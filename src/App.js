import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Navigation/Header/Header';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Product from './Pages/Product/Product';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
