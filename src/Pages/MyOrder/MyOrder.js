import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const email = sessionStorage.getItem('email');
  const [orders, setOrders] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://secret-tundra-51737.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://secret-tundra-51737.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };
    return (
        <div className="container mx-auto px-4">
        <div> 
      <h1>Order Details</h1>

      <div className="">
        <div className="row container">
          {orders.map((product) => (
            <div className="col-md-4">
              <div className="service border p-3">
                <div className="">
                  <img className="w-52 mx-auto" src={product.image} alt="" />
                </div>

                <h6 className='text-3xl'>{product.name}</h6>
                <h4>{product.model}</h4>
                <p>{product.description}</p>
                <h3 className="text-red-500 text-2xl font-bold"> Price :${product.price}</h3>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-yellow-500 p-3 rounded-2xl" 
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    );
};

export default MyOrder;