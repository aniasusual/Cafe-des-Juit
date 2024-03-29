import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function MyOrder() {

    const [orderData, setOrderData] = useState(null);

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) return; // Make sure userEmail is available

        try {
            // const response = await fetch("http://localhost:4000/api/myorderData", {
            const response = await fetch("https://cafe-des-juit.onrender.com/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            });
            const data = await response.json();
            setOrderData(data.orderData);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData && orderData.map(order => (
                        <div key={order._id}>
                            {order.order_data.map(([items, orderDate]) => (
                                <div key={orderDate} className='m-auto mt-5'>
                                    {orderDate}
                                    <hr />
                                    {items.map(item => (
                                        <div className='col-12 col-md-6 col-lg-3' key={item.id}>
                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                        <span className='m-1'>{item.qty}</span>
                                                        <span className='m-1'>{item.size}</span>
                                                        <span className='m-1'>{orderDate}</span>
                                                        <div className='d-inline ms-2 h-100 w-20 fs-5' >
                                                            ₹{item.price}/-
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
