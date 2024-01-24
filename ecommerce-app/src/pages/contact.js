import React from 'react'
import './contact.css'
import Navbar from "../components/header";
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div>
    {/* contact banner */}
      <div className='contact-banner'>
        <Navbar />
        <div className='baner d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Contact Us</h1>
        </div>
      </div>
      {/* help heading */}
      <div className='text-center my-5'>
        <p className='mb-0'>Have any queries? </p>
        <p className='fw-bold fs-1  '>We're here to help.</p>
      </div>
      {/* contact us option */}
      <div className='container'>
      <div className='row'>
        <div className='col-md-3  col-sm-12 text-center mb-5 shadow'>
    <h4>Sales</h4>
    <p>sales is most important things to contact us in your profile</p>
    <p className='text-primary'>18001234567</p>
        </div>
        <div className='col-md-3 col-sm-12 text-center mb-5 shadow'>
    <h4>Complaints</h4>
    <p>sales is most important things to contact us in your profile</p>
    <p className='text-primary'>19002238899</p>
        </div>
        <div className='col-md-3 col-sm-12 text-center mb-5 shadow'>
    <h4>Returns</h4>
    <p>sales is most important things to contact us in your profile</p>
    <p className='text-primary'>returns@mail.com</p>
        </div>
        <div className='col-md-3 col-sm-12 text-center mb-5 shadow'>
    <h4>Marketing</h4>
    <p>sales is most important things to contact us in your profile</p>
    <p className='text-primary'>17004445578</p>
        </div>
      </div>

      <div className='row my-5'>
        <div className='col-md-6'>
          <div className='text-center mx-5 my-5'>
            <p className='fs-6 fw-bold  mb-0'>Dont't be a stranger!</p>
            <p className='fs-3 fw-bold'>You tell us. We listen.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, impedit nesciunt beatae laudantium tempore ipsa ad officia est vero ea rem provident cumque porro mollitia ipsum tenetur natus aspernatur atque?</p>
          </div>
        </div>
        <div className='col-md-6'>
          <form className='form shadow'>
          <input type='text' placeholder='NAME' className='form-control my-3'/>
          <input type='text' placeholder='SUBJECT' className='form-control my-3'/>
          <input type='email' placeholder='EMAIL' className='form-control my-3'/>
          <textarea className='form-control my-3' placeholder='MESSAGE' rows='3' cols='2'></textarea>
          <button className='btn btn-primary px-3 my-3' type='submit'>SEND MESSAGE</button>

          </form>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact