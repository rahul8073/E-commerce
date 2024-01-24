import React, { Fragment } from 'react'
import './home.css'
import Navbar from '../components/header'
import Product from '../components/products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia, faEarthEurope, faPerson, faTag, faUserLock } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/footer'

const Home = () => {
    return (
        <Fragment className='fragment'>
            <div className='banner'>
                <Navbar />

                <div className='d-flex align-items-center vh-100'>

                    <div className=' content text-light ms-5 text-center text-wrap'>
                        <h2 className='text-capitalize text-wrap fs-1'>Raining offers for hot summer!</h2>
                        <p className='text-capitalize text-wrap  fs-3 my-3'>26% off on all products.</p>
                    </div>
                </div>
            </div>
            {/* offers details */}
            <div className='devider'></div>
            <div className='row'>
                <div className='col-md-4 my-2'>
                    <div className='box-1 d-flex align-items-end'>
                        <div className='box-content text-light mx-3 mb-5 text-capitalize'>
                            <h3>20% off on tank tops</h3>
                            <p>this offer only buy on 1000 rs fghg gfjhhj vhjhgjk dghgfh</p>
                            <button className='btn btn-light text-capitalize'>Shop now</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className='box-2 d-flex align-items-end'>
                        <div className='box-content text-light mx-3 mb-5 text-capitalize'>
                            <h3>lets suits for you</h3>
                            <p>this offer only buy on 1000 rs fghg gfjhhj vhjhgjk dghgfh</p>
                            <button className='btn btn-light text-capitalize'>check out</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className='box-3 d-flex align-items-end'>
                        <div className='box-content text-light mx-3 mb-5 text-capitalize'>
                            <h3>latest eye wear for you</h3>
                            <p>this offer only buy on 1000 rs fghg gfjhhj vhjhgjk dghgfh</p>
                            <button className='btn btn-light text-capitalize'>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='devider'></div>
            <Product />
            <div className='devider'></div>
            <div className='offer-limit mx-3 text-light d-flex align-items-center'>
                <div className='offer-limit-content ms-5'>
                    <h5 className='text-capitalize mb-4'>limited time offer</h5>
                    <h2 className='text-capitalize mb-3'>special edition</h2>
                    <p>gfg jhgyjf yutrty fdtdv gfgfd gfyjfyjtf gfgrts gfhgfdyj <br /> saew hjtyr ghgfr zsqaer hjfgtyrf gfdred</p>
                    <h4 className='text-capitalize my-4'>Buy this t-shirt at  20% discount, use code OFF20</h4>
                    <button className='btn btn-light px-3 ms-2'>Shop Now </button>
                </div>
            </div>
            <div className='devider'></div>
            <div className='row mx-5'>
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
            <div className='devider'></div>

            <Footer />


        </Fragment>
    )
}

export default Home