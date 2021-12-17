import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Navigation/Header/Header';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Man from './Pages/Product/Man';
import Woman from './Pages/Product/Woman';
import Kids from './Pages/Product/Kids';
import Collections from './Pages/Product/Collections';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import NikeAddShoes from './Pages/NikeAddShoes/NikeAddShoes';
import Gallery1 from './Pages/shared/Gallery/Gallery1';
import Gallery2 from './Pages/shared/Gallery/Gallery2';
import Gallery3 from './Pages/shared/Gallery/Gallery3';
import Gallery4 from './Pages/shared/Gallery/Gallery3';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/man" element={<Man />} />
      <Route path="/woman" element={<Woman />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addshoes" element={<NikeAddShoes />} />
      <Route path="/gallery" element={<Gallery1 />} />
      <Route path="/gallery" element={<Gallery2 />} />
      <Route path="/gallery" element={<Gallery3 />} />
      <Route path="/gallery" element={<Gallery4 />} />
    </Routes>
  </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
