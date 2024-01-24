import React from 'react'
import Product from '../components/products'
import Navbar from '../components/header'
import AllProducts from '../components/everything_products'
import Footer from '../components/footer'
import Filter from '../components/filter'
import { Link } from 'react-router-dom'

const Everything = () => {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-8'>
          <AllProducts />
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
        <div className='col-md-4'><Filter /></div>
      </div>
      <Footer />
    </div>
  )
}

export default Everything