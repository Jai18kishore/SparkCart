import React, { useEffect, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const VerifyRazorpay = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyRazorpayPayment = async () => {
        try {
            if (!token) return;

            const response = await axios.post(backendUrl + '/api/order/verifyRazorpay', {
                success,
                orderId
            }, {
                headers: { token }
            });

            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        verifyRazorpayPayment();
    }, [token]);

    return (
        <div>
            
        </div>
    );
};

export default VerifyRazorpay;
