import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Filter = () => {
    return (
        <div>
        <div className='filter my-3'>
             <label for="customRange2" className="form-label">Filter by Price</label>
            <input type="range" className="form-range w-75 mx-4 mb-3" min="100" max="10000" id="customRange2" />
            <button className='btn btn-primary'>Filter</button>
            <p className='float-end me-4'>Price : <b>Rs.100 - Rs.10000 </b></p>
        </div>
        <div className='catagories my-4'>
        <label for="customRange2" className="form-label">Categories:</label>
        <div className='row ms-3 mt-2'>
            <div className='col-6'>Accessories</div>
            <div className='col-6'>(7)</div>
        </div>
        <div className='row ms-3 mt-2'>
            <div className='col-6'>Men</div>
            <div className='col-6'>(17)</div>
        </div>
        <div className='row ms-3 mt-2'>
            <div className='col-6'>Women</div>
            <div className='col-6'>(14)</div>
        </div>

        </div>
        <div className='saler my-3'>
        <label for="customRange2" className="form-label">Our Best Sellers</label>
            <div className='row my-3'>
            <div className='col-4'>
            <a href='#' className='nav-link'>
                <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg' className='img-fluid'/>

            </a>
            </div>
            <div className='col-8'>
                <a href='#' className='nav-link d-block'>RKS Yellow Shues</a>
                <p className='my-3'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </p>
                <p><span className='text-decoration-line-through text-muted'>Rs.1000</span> Rs.5000</p>
                
            </div>
            </div>
            <div className='row my-3'>
            <div className='col-4'>
            <a href='#' className='nav-link'>
                <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/tshirt2-300x300.jpg' className='img-fluid'/>

            </a>
            </div>
            <div className='col-8'>
                <a href='#' className='nav-link d-block'>Blue Tshirt</a>
                <p className='my-3'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </p>
                <p>Rs.730 - Rs.1020</p>
                
            </div>
            </div>
            <div className='row my-3'>
            <div className='col-4'>
            <a href='#' className='nav-link'>
                <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-300x300.jpg' className='img-fluid'/>

            </a>
            </div>
            <div className='col-8'>
                <a href='#' className='nav-link d-block'>Basic Gray Jeans</a>
                <p className='my-3'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </p>
                <p> Rs.750</p>
                
            </div>
            </div>
            <div className='row my-3'>
            <div className='col-4'>
            <a href='#' className='nav-link'>
                <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe5-300x300.jpg' className='img-fluid'/>

            </a>
            </div>
            <div className='col-8'>
                <a href='#' className='nav-link d-block'>RKS Black Shues</a>
                <p className='my-3'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </p>
                <p>Rs.500 - Rs 1000</p>
                
            </div>
            </div>
            <div className='row my-3'>
            <div className='col-4'>
            <a href='#' className='nav-link'>
                <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory3-300x300.jpg' className='img-fluid'/>

            </a>
            </div>
            <div className='col-8'>
                <a href='#' className='nav-link d-block'>Buddha Bracelet</a>
                <p className='my-3'>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </p>
                <p>Rs 150</p>
                
            </div>
            </div>
        </div>
           
        </div>
    )
}

export default Filter