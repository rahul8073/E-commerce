import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './login.css'
import axios from 'axios';

const Login = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const formSubmit=e=>{
    e.preventDefault();
    const requestData={email,password};
    axios.post("http://localhost:5000/login",requestData)
    .then(result=>{
      console.log(result.data.result);
      navigate("/");
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='login'>
        <Link to='/' className='nav-link text-center'><span id="logo2" className="text-uppercase">r<b>ks</b></span></Link>
        <form className='form mt-3 shadow p-3' onSubmit={formSubmit}>
            <label className='form-label text-muted'>Email</label>
            <input type='email' className='form-control' value={email} onChange={e=>setEmail(e.target.value)} required  />
            <label className='form-label text-muted'>Password</label>
            <input type='password' className='form-control' value={password} onChange={e=>setPassword(e.target.value)} required />
            <div className='d-grid my-4'>
              <button type='submit' className='btn btn-primary'>Login</button>
            </div>
            <div className='my-4'>
              <hr className='text-muted' />
              <h5 className='text-muted text-center'>OR</h5>
              <hr className='text-muted' />
            </div>
            <div className='mt-3 mb-5 d-grid'>
              <button className="custom-btn custom-btn-white border-0">
                <span className='text-muted fs-6'>Don't have an account?</span>
                <Link to="/signIn" className='ms-1 text-info fw-bold'>Sign In</Link>
              </button>
            </div>
          </form>

    </div>
    </div>
  )
}

export default Login