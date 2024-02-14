import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignIn = () => {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const navigate=useNavigate();
  const submitForm=e=>{
    e.preventDefault();
    const requestData={firstName,lastName,email,password};
    axios.post("http://localhost:5000/signup",requestData)
    .then(result=>{
      console.log(result.data.result);
      navigate("/login")
    })
    .catch(err=>console.log(err))
    
  }
  return (
    <div>
        <div className='d-flex justify-content-center'>
        <div className='w-50 my-4'>
        <Link to='/' className='nav-link text-center'><span id="logo2" className="text-uppercase">r<b>ks</b></span></Link>
          <form className='form mt-3 shadow p-3' onSubmit={submitForm} >
            <label className='form-label text-muted'>First Name</label>
            <input type='text' className='form-control'  value={firstName} onChange={e=>setFirstName(e.target.value)} required/>
            <label className='form-label text-muted'>Last Name</label>
            <input type='text' className='form-control'  value={lastName} onChange={e=>setLastName(e.target.value)} required />
            <label className='form-label text-muted'>Email</label>
            <input type='email' className='form-control' value={email} onChange={e=>setEmail(e.target.value)}  required />
            <label className='form-label text-muted'>Password</label>
            <input type='password' className='form-control'value={password} onChange={e=>setPassword(e.target.value)}  />
            <div className='d-grid my-4'>
              <button type='submit' className='btn btn-primary'>Signup</button>
            </div>
            <div className='my-4'>
              <hr className='text-muted' />
              <h5 className='text-muted text-center'>OR</h5>
              <hr className='text-muted' />
            </div>
            <div className='mt-3 mb-5 d-grid'>
              <button className="custom-btn custom-btn-white border-0">
                <span className='text-muted fs-6'>Already have an account?</span>
                <Link to="/login" className='ms-1 text-info fw-bold'>Log In</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn