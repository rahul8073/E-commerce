import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/header'
import AllProducts from '../components/everything_products'
import Filter from '../components/filter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Women = () => {
  return (
    <div>
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-8'>
        <div>
        <nav aria-label="breadcrumb" className='ms-5 mt-3'>
                        <ol class="breadcrumb">
                            <li className="breadcrumb-item "><Link to='/' className='text-muted text-decoration-none'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">women</li>
                        </ol>
                    </nav>
                    <div className='mx-5'>
                    <h1 className='mb-5'>Women</h1>
                    {/* Description women products */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit totam ducimus ex sapiente obcaecati hic quaerat fuga impedit ipsam assumenda porro, aliquam, pariatur iste nobis molestiae adipisci quam non tempore consectetur nemo. Error similique commodi reiciendis quasi, excepturi nam aliquid dolorem labore dolorum deleniti provident nesciunt quibusdam tempora molestiae!</p>

                    </div>

                    {/* page no. detail */}
                    <div className='row mt-5 mx-3'>
                        <div className='col-6'>
                            <p>Showing 1-12 of 17 results</p>
                        </div>
                        <div className='col-6'>
                            <select className='text-center float-end'>
                                <option>Default sorting</option>
                                <option>Sort by popularity</option>
                                <option>Sort by Average rating</option>
                                <option>Sort by latest</option>
                                <option>Sort by Price: low to high</option>
                                <option>Sort by Price: high to low</option>
                            </select>
                        </div>
                    </div>
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
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link disabled" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='col-md-4'><Filter/></div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Women