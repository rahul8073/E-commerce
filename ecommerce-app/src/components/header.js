import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCartShopping, faMagnifyingGlass, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-uppercase" to='/'><span id="logo">r<b>ks</b></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase ">
                            <li className="nav-item">
                                <Link to='/Everything' className="nav-link text-light" aria-current="page" >everything</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/women' className="nav-link text-light">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/men">men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/accessories">accessories</Link>
                            </li>
                        </ul>
                        <form className=" m-auto mt-2 mb-2">
                            <div className="input-group">
                                <input type="text" placeholder="Product name, Category name etc" className="form-control" />
                                <button type="button" className=" input-group-btn btn btn-outline-light"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                            </div>
                        </form>
                        <ul className="navbar-nav  mb-2 mb-lg-0 text-uppercase">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/contact">contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fs-5" to="/cart"><FontAwesomeIcon icon={faBagShopping} /><span className="text-dark bg-light su">0</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/login' className="nav-link text-light fs-5"><FontAwesomeIcon icon={faUserAlt} /></Link>
                            </li>
                            <li className="nav-item me-4">
                                <div className="dropdown w-25 ">
                                    {/* {localStorage.getItem("token") != null ?*/} <> <a className="btn" href="#" role="button" data-bs-toggle="dropdown">
                                         <img className='navbar-profile-pic ' alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                    </a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item mt-0" to="/myprofile">My Profile</NavLink>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#" >
                                                    Logout
                                                </a>
                                            </li>
                                        </ul> </>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;