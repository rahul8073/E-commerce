import React from 'react'
import './product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from './footer'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    return (
        <div>
        <nav aria-label="breadcrumb" className='ms-5 mt-3'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Store</li>
                        </ol>
                    </nav>
            <div className='row mx-3'>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image'>
                            <span className=' float-start mt-4 ms-3 p-2 rounded-pill bg-light text-muted'>Sale!</span>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image2'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image3'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mx-3'>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image5'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image6'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image7'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mx-3'>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image9'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image4'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image4'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mx-3'>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image4'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image4'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-2'>
                    <div className="card">
                        <div className='card-img-top card-image image8'>
                            <span className='float-end mt-3 me-3 p-2 rounded-pill bg-light cart'><FontAwesomeIcon icon={faCartShopping} /></span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">DNK Yellow Shues</h5>
                            <span className='d-block text-muted'>Men</span>
                            <p><span className='text-decoration-line-through text-muted'>Rs 150</span> Rs 120</p>
                            <p><span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                                <span><FontAwesomeIcon icon={faStar} /> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts