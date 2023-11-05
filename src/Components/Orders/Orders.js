import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue } from '../Context/stateProvider'
import { db } from '../Login/firebase';
import OrderProp from './OrderProp';

function Orders() {

    const [{user}, dispatch] = useStateValue();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) =>
                setOrders(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className='orders'>
            <div className='ordersPage'>
                <h1 className='orders__title'>
                    Your Orders
                </h1>

                <div className='orders__content'>
                    {orders?.map((order) => {
                        return(
                            <OrderProp order={order} key={order.id} />
                        )       
                    })}
                </div>
            </div>
        </div>
    )
}

export default Orders