import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faIn} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
        <div className=' py-5 border border-2'>
                <h3 className='text-uppercase ms-4'><a className='nav-link' href='#'>sale upto 70% off for all clothes & fashion items , on all brand</a></h3>

                </div>
            <div className='row my-4 py-3 border border-3 m-auto'>
                <div className='col-md-5 my-3 text-center'>
                    <a className="navbar-brand text-uppercase ms-4" href="#"><span id="logo1">r<b>ks</b></span></a>
                    <p className='fs-4 ms-4 mt-3 fw-bold'>The best look anytime, anywhere</p>
                </div>
                <div className='col-md-2 d-flex justify-content-center my-3'>
                    <div className='text-capitalize '>
                        <h5 className='mb-4'>For her</h5>
                        <a className='nav-link my-2 text-muted fs-6' href='#'>Women jean</a>
                        <a className='nav-link mb-2 text-muted fs-6' href='#'>tops and shirt</a>
                        <a className='nav-link mb-2 text-muted fs-6' href='#'>Women jackets</a>
                        <a className='nav-link mb-2 text-muted fs-6' href='#'>heals and flats</a>
                        <a className='nav-link text-muted fs-6' href='#'>Women accessories</a>
                    </div>
                </div>
                <div className='col-md-2 d-flex justify-content-center my-3'>
                    <div className='text-capitalize '>
                        <h5 className='mb-4'>For her</h5>
                        <a className='nav-link my-2 text-muted fs-6' href='#'>men jeans</a>
                        <a className='nav-link mb-2 text-muted fs-6' href='#'>men shirt</a>
                        <a className='nav-link mb-2 text-muted fs-6' href='#'>men shues</a>
                        <a className='nav-link text-muted fs-6' href='#'>men accessories</a>
                        <a className='nav-link mb-2 text-muted fs-6' href='#'>men jackets</a>
                    </div>
                </div>
                <div className='col-md-3 my-3 d-flex justify-content-center'>
                    <div className='text-capitalize'>

                        <h5 className='mb-4'>subscribe</h5>
                        <input type='email' placeholder='your email address...' className='form-control' />
                        <button className='btn btn-primary my-3 text-uppercase'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='row mt-2 mb-5'>
                <div className='col-md-6'>
                    <p className='ms-5 fs-6'>Copywright&copy; 2024 BrandStore.</p>
                </div>
                <div className='col-md-6'>
                    <ul className='nav justify-content-center '>
                        <li className='nav-item'>
                            <a href='#' className='nav-link text-dark'><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link text-dark'><i class="fa-brands fa-youtube"></i></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link text-dark'><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link text-dark'><i class="fa-brands fa-google"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer