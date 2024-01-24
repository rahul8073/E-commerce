import React from 'react'
import './cart.css'
import Navbar from '../components/header'
import Footer from '../components/footer'
const Cart = () => {
    return (
        <div>
            <div className='cart-banner '>
            <Navbar/>
            <div className='cart-color d-flex justify-content-center align-items-center'>

                <h1>Cart</h1>
            </div>
            </div>
            <div className='row mx-4 my-5'>
                <div className='col-md-4 '>


                </div>
                <div className='col-md-2'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Products</p>
                        </div>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Products</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Price</p>
                        </div>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Rs.1000</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Products</p>
                        </div>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <input type='number' min='1' max='20' className='num' />
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                <div className='row'>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Subtotal</p>
                        </div>
                        <div className='col-md-12 col-sm-6 col-6'>
                            <p>Rs.1000</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 my-3'>
                    <input type='text' className='' placeholder='Coupon code'/>
                    <button type='submit' className='btn btn-primary ms-4'>Apply Coupon</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                <div className='d-grid my-3'>
                    <button type='submit' className='btn btn-primary '>Update</button>

                </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-md-6 col-sm-12'></div>
                <div className='col-md-6 col-sm-12'>
                    <p>Cart total: </p>
                    <div className='row mx-3'>
                        <div className='col-md-6 col-sm-6 col-6'><p>Subtotal</p></div>
                        <div className='col-md-6 col-sm-6 col-6'><p>Rs.1000</p></div>
                    </div>
                    <div className='row mx-3'>
                        <div className='col-md-6 col-sm-6 col-6'><p>Total</p></div>
                        <div className='col-md-6 col-sm-6 col-6'><p>Rs.1000</p></div>
                    </div>
                    <div className='d-grid mx-3'>
                        <button type='submit' className='btn btn-primary px-4 py-2'>Checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart