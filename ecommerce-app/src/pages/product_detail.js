import React from 'react'
import { Link } from 'react-router-dom'
import './product_detail.css';
import Footer from '../components/footer';
import Navbar from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

const Product_detail = () => {
    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-5 my-3'>
                    <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2.jpg' className='img-fluid mx-4 my-3' />
                </div>
                <div className='col-7 my-3'>
                    <div className='mx-4'>

                        <nav aria-label="breadcrumb" className='ms-1 mt-3'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to='/' className='text-muted text-decoration-none'>Home</Link></li>
                                <li class="breadcrumb-item"><Link to='/' className='text-muted text-decoration-none'>Men</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Anchor Bracelet</li>
                            </ol>
                        </nav>
                        <p className='mb-2'>Accessories, Women</p>
                        <h3 className='mb-3'>Anchor Bracelet</h3>
                        <h5>Rs.300 - Rs.5000<span className='fs-6 fw-normal text-muted'>+ Free Shipping</span></h5>
                        <p className='my-4'>jhdjkh dsnb bksf sfbjhfdg bfh sf rsh rahul singh sdkjhg jhjkf skjdhfkj zfjg jnzdfgh zxdnkjvh jhf hzfj hjfs jkhsfdhs hdfksjh jhsdfkh sdkjhaksfh hjhdfj jhjsf hzf jhfsb d,jhfs jh sjdh h jkhk jkhk dfxv dfg xfg xfg</p>
                        <span class=" bg-dark rounded-circle px-2 me-2"></span>
                        <span class=" bg-warning rounded-circle px-2 me-2"></span>
                        <span class=" bg-info rounded-circle px-2 me-2"></span>
                    </div>
                    <div className='border border-2 border-start-0 border-end-0 p-3 mx-3 my-4 '>
                        <input type='number' min='1' max='20' className='num' />
                        <button className='btn btn-info text-uppercase text-light fw-bold ms-4'>Add To Cart </button>
                    </div>
                </div>
            </div>
            <nav class="nav mx-4 border-top  p-3">
                <a class="nav-link text-muted" href="#">Description</a>
                <a class="nav-link text-muted" href="#">Additional Information</a>
                <a class="nav-link text-muted" href="#">Review(0)</a>
            </nav>
            <div className='discription m-5'>
                <h3 className='text-capitalize mb-2'>Product discription</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quae fugit, nostrum tenetur, provident voluptatibus temporibus recusandae alias blanditiis labore rerum mollitia dignissimos, consectetur explicabo animi nemo autem unde debitis aspernatur tempora! Officiis asperiores omnis, sunt quis libero at totam id nostrum molestias, error inventore dignissimos ratione, ex facere natus. Ad minus asperiores veritatis inventore, corrupti id ratione sit ex saepe magni reprehenderit, sed quis vero quae, cupiditate quasi odio beatae quam laudantium ducimus eligendi voluptate! Temporibus, atque possimus dolor, vitae facilis aliquam dolore, nemo optio reprehenderit hic deleniti soluta sed? Illum aliquid pariatur id assumenda nulla ex voluptas itaque!</p>
                <div className='row '>
                    <div className='col-6 m-0 p-0'>
                        <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-01.jpg' className='img-fluid  h-100 ' alt='' />
                    </div>
                    <div className='col-6 m-0 p-0'>
                        <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-04.jpg' className='img-fluid' alt='' />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 m-0 p-0'>
                        <img src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='img-fluid' alt='' />

                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center mb-5'>
                        <div className='w-50 h-50'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magni dolorum consectetur, dolore voluptate rem unde molestiae, ratione asperiores, temporibus corrupti porro odio voluptatum ea ipsa qui vel explicabo tempora laudantium nam atque maiores et iste. Ipsum, voluptatibus? Laudantium odio fuga ducimus cumque laboriosam sequi recusandae quas, eos exercitationem iste.</p>
                        </div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <div className='w-50 h-50'>
                            <h5>More about product</h5>
                            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium odio fuga ducimus cumque laboriosam sequi recusandae quas, eos exercitationem iste.</p>
                        </div>
                    </div>
                    <div className='col-6 m-0 p-0'>
                        <img src='https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DS' className='img-fluid w-100 ' alt='' />

                    </div>
                </div>
            </div>
            <div className='additional-information d-none'>
                <div className='row border border-2 m-5 p-2 text-muted '>
                    <div className='col-md-3 '>
                        <span>Color</span>
                    </div>
                    <div className='col-md-9  border-start'>
                        <span className='ms-3'>Black, Brown, Blue, Red</span>
                    </div>
                </div>
            </div>
            <div className='review d-none'>
                <p>There are no review yet.</p>
                <div className='border border-2 m-3'>
                    <h4>Be the first to review "Anchor Bracelete"</h4>
                    <p>Your  email address will not be published. Required fields are marked <sup>*</sup></p>
                    <h5>Your rating<sup className=''>*</sup> <span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span><span><FontAwesomeIcon icon={faStar} /></span></h5>
                    <form>

                        <label>Your review<sup>*</sup></label>
                        <textarea className='form-control' rows='3' cols='2'></textarea>
                        <div className='row'>
                            <div className='col-6 ms-3'>
                                <label>Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-6 ms-3'>
                                <label>Email</label>
                                <input type='email' className='form-control' />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary my-3'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='related_product container'>
            <h2 className='my-4'>Related Products</h2>
                <div className='row'>
                    <div className='col-md-3'>
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
                    <div className='col-md-3'>
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
                    <div className='col-md-3'>
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
                    <div className='col-md-3'>
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
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product_detail