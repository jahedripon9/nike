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
import PlaceOrderInformation from './Pages/PlaceOrderInformation/PlaceOrderInformation';
import PrivetRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import NikeProductsAdd from './Pages/NikeAddShoes/NikeAddShoes';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Review from './Pages/Dashboard/Review/Review';
import MyOrder from './Pages/MyOrder/MyOrder';
import Deshboard from './Pages/Dashboard/Dashboard/Deshboard';
import NotFound from './Pages/NotFound/NotFound';
import ContactUs from './Pages/shared/ContactUs/ContactUs';
import AboutUs from './Pages/shared/AboutUs/AboutUs';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
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
      <Route path="/deshboard" element={<Deshboard />} />
      <Route path="/gallery" element={<Gallery1 />} />
      <Route path="/gallery" element={<Gallery2 />} />
      <Route path="/gallery" element={<Gallery3 />} />
      <Route path="/gallery" element={<Gallery4 />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      
      <Route path="/nikeproduct/:verifyId" element={<PlaceOrderInformation />} />
        <Route path='/deshboard' 
          element={
          <PrivetRoute>
          <Deshboard></Deshboard>
          </PrivetRoute>}>
      </Route>
      <Route path='/makeAdmin' 
          element={
          <AdminRoute>
          <MakeAdmin></MakeAdmin>
          </AdminRoute>}>
      </Route>
      <Route path='/addshoes' 
          element={
          <AdminRoute>
          <NikeProductsAdd></NikeProductsAdd>
          </AdminRoute>}>
      </Route>
      <Route path='/manageorder' 
          element={
          <AdminRoute>
          <ManageOrder></ManageOrder>
          </AdminRoute>}>
      </Route>
      <Route path='/review' 
          element={
          <Route>
          <Review></Review>
          </Route>}>
      </Route>
      <Route path='/myorder' 
          element={
          <Route>
          <MyOrder></MyOrder>
          </Route>}>
      </Route>
      <Route path="*" element={<NotFound />} />
            
    </Routes>
  </Router>
  </AuthProvider>
    </div>
  );
}

export default App;



 

