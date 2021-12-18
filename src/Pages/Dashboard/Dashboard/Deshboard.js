import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Review from "../../Dashboard/Review/Review";

import useAuth from '../../../hooks/useAuth';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
// import ManageOrder from '../../ManageOrder/ManageOrder';
import WelcomePage from '../../WelcomePage/WelcomePage';
// import NikeProductsAdd from '../../NikeAddShoes/NikeAddShoes';
// import PrivetRoute from '../../Login/PrivateRoute/PrivateRoute'
// import MyOrder from '../../../Pages/MyOrder/MyOrder'


const Deshboard = () => {
  
  
  // let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  
  
  return (
    <div className="container mx-auto px-4">
      <header className="bg-white rounded-lg text-gray-800 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/dashboard"><button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-20" src="https://i.ibb.co/vxvSvJk/Nike-logo.png" alt="" /></button></Link>
              <span className="ml-3 text-xl">Deshboard</span>
            </span>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <Link to='/'><button className="mr-5 hover:text-gray-900">Home</button></Link>
              <Link to='/dashboard/payment'><button className="mr-5 hover:text-gray-900">Payment</button></Link>
              
              <Link to='/myorder'><button className="mr-5 hover:text-gray-900">My Order</button></Link>
              <Link to="/review"><button className="mr-5 hover:text-gray-900">Review</button></Link>

            { admin &&

            <span>
              <Link to="/makeAdmin"><button className="mr-5 hover:text-gray-900">Make Admin</button></Link>
                          
              <Link to="/addshoes"><button className="mr-5 hover:text-gray-900">Nike Product Add</button>
              </Link>
              <Link to="/manageorder"><button className="mr-5 hover:text-gray-900">Manage Orders</button>
              </Link>
            </span>

            }
              
            </nav>
            <button onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <div>
       
          
        <Outlet></Outlet>
        </div>
      <WelcomePage></WelcomePage>
    </div>
  );
};

export default Deshboard;