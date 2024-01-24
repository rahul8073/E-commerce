import React from 'react'
import './about.css'
import Navbar from '../components/header'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia, faPerson, faTag, faUserLock } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
    {/* about banner */}
      <div className='about-banner'>
      <Navbar/>
        <div className='about-color d-flex justify-content-center align-items-center'>
        <h1 className='text-light'>About Us</h1>

        </div>
      </div>
      {/* image and content */}
      <div className='row mt-5'>
        <div className='col-md-6'>
          <div className='content mx-4 my-5 '>
          <div id='my-line' className='bg-primary w-25  mb-4 ms-3'></div>
            <h2 className='text-capitalize '>Who we are</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, impedit nesciunt beatae laudantium tempore ipsa ad officia est vero ea rem provident cumque porro mollitia ipsum tenetur natus aspernatur atque?</p>
          </div>
        </div>
        <div className='col-md-6'>
          <img className='img-fluid' src='https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?w=740&t=st=1706008633~exp=1706009233~hmac=4b9190eaf1eba582c682ffebcc8dfbd5ad6778e391eb92c49164cd6baa29d515' alt='' />
        </div>
      </div>
      <div className=' social-banner d-flex justify-content-center my-5 mx-2'>
        <div className='bg-light'>
        <div className='my-5 mx-5'>
          <div id='my-line' className='bg-primary w-50 m-auto mb-4' ></div>
          <p className='fw-bold text-center fs-2'>Follow Us</p>
          {/* social icon */}
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
      {/* about secure freeshiping heading */}
      <div className='row mx-5 my-5'>
                <div className='col-md-3 text-center'>
                    <h5 className='fs-2 text-muted'><FontAwesomeIcon icon={faEarthAsia} /></h5>
                    <h4>Worldwide Shipping</h4>
                    <p>ghfhg bvcfgd gvffdrt fgds bcfgdser gf hgf hgfhdf</p>
                </div>
                <div className='col-md-3 text-center text-capitalize'>
                    <h5 className='fs-2 text-muted'><FontAwesomeIcon icon={faPerson} /></h5>
                    <h4>Best quality</h4>
                    <p>ghfhg bvcfgd gvffdrt fgds bcfgdser gf hgf hgfhdf</p>
                </div>
                <div className='col-md-3 text-center text-capitalize'>
                    <h5 className='fs-2 text-muted'><FontAwesomeIcon icon={faTag} /></h5>
                    <h4>best offer</h4>
                    <p>ghfhg bvcfgd gvffdrt fgds bcfgdser gf hgf hgfhdf</p>
                </div>
                <div className='col-md-3 text-center text-capitalize'>
                    <h5 className='fs-2 text-muted'><FontAwesomeIcon icon={faUserLock} /></h5>
                    <h4>secure payments</h4>
                    <p>ghfhg bvcfgd gvffdrt fgds bcfgdser gf hgf hgfhdf</p>
                </div>
            </div>
      <Footer/>
    </>
  )
}

export default About