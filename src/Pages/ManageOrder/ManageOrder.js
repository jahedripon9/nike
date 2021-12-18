import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("https://secret-tundra-51737.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handeleUpdate = (id) => {
    fetch(`https://secret-tundra-51737.herokuapp.com/status/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  }


  
    return (
        <div className="container mx-auto px-4">
            <div className='mx-auto my-14'>
            <h1 className='border-2 text-3xl font-bold'>Manage All Orders</h1>
                <table className="table-auto bg-yellow-50 ">
          <thead className='border-2'>
          <tr className="bg-blue-200 border-2">
              <th>#</th>
              <th className='border-2'>Service Title</th>
              <th className='border-2'>Event description</th>
              <th className='border-2'>Image Link</th>
              <th className='border-2'>Status</th>
              <th className='border-2'>Action</th>
            </tr>
          </thead>
          {orders?.map((product, index) => (
            <tbody>
              <tr className='border-2'>
                <td className='border-2'>{index}</td>
                <td className='border-2'>{product.name}</td>
                <td className='border-2'>{product.description}</td>
                <td className='border-2'>{product.image}</td>
                <td>
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={product.status}
                  />
                </td>
                <button className="bg-red-500 px-3 py-2 rounded">Delete</button>
                <button
                  onClick={() => handeleUpdate(product._id)}
                  className="btn bg-success p-2"
                >
                  UPDATE
                </button>
              </tr>
            </tbody>
          ))}
        </table>
            </div>
        </div>
    );
};

export default ManageOrder;