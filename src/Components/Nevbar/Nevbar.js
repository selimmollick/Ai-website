import React from 'react'
import './Nevbar.css';
import { Link } from 'react-router-dom';

function Nevbar() {
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#" />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            
                            <ul className="navbar-nav gap-2">
                                <li className="nav-item rounded">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <i className="bi bi-house-fill me-2" />
                                        <Link to="/">Home</Link>
                                    </a>

                                </li>
                                <li className="nav-item rounded">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-people-fill me-2" />
                                        <Link to="/About">About</Link>
                                    </a>
                                </li>
                                <li className="nav-item rounded">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-gear me-2" />
                                      
                                        <Link to="/Services">Services</Link>
                                    </a>
                                </li>
                                <li className="nav-item rounded">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-journal-richtext me-2" />
                                        <Link to="/Blog">Blog</Link>
                                    </a>
                                </li>
                                <li className="nav-item rounded">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-telephone-fill me-2" />
                                        <Link to="/Contacts">Contacts</Link>
                                    </a>
                                </li>
                                <li className="nav-item dropdown rounded top-main-profile">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="bi bi-person-fill me-2" />
                                        Profile
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Account
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                               
                            </ul>
                            
                   

                        </div>
                        <div>
                            <ul className="navbar-nav gap-2 top-profile">
                            <li className="nav-item dropdown rounded">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="bi bi-person-fill me-2" />
                                        Profile
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Account
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                </nav>

            </>

        </div>
    )
}

export default Nevbar
