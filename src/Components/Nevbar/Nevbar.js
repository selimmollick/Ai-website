import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Nevbar.css';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../Auth/UserAuthContext";

// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../Auth/UserAuthContext";
function Nevbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const { logOut, user } = useUserAuth();
    // const navigate = useNavigate();

    // Like-section
    const [likesCount, setLikesNumber] = useState(2);


    // profile-logout
    // const handleLogout = async () => {
    //     try {
    //         await logOut();
    //         navigate("/");
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    // const { profile, user } = useUserAuth();
    // const navigate = useNavigate();
    // const handleProfile = async () => {
    //     try {
    //       await profile();
    //       navigate("/");
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //   };



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
                                            <a href='#' className='dropdown-item' onClick={handleShow}>
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

                                            {/* <Button className="dropdown-item" variant="primary" onClick={handleLogout}>
                                                Log out
                                            </Button> */}
                                        </li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                        <div>
                            <ul className="navbar-nav gap-2 top-profile">
                                <li className="nav-item dropdown rounded">
                                    {/* <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"  
                                    >
                                        <i className="bi bi-person-fill me-2" />
                                        Profile
                                    </a> */}

                                    <a href='#' className='profile-main-btn' onClick={handleShow}>
                                        <i className="bi bi-person-fill me-2" />
                                        Profile
                                    </a>
                                    {/* <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a href='#' className='dropdown-item' onClick={handleShow}>
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
                                    </ul> */}
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                {/* new-popup-section */}
                <Modal show={show} onHide={handleClose}>
                    <Form>
                        <div className="whole-wrap">
                            <div className="profile-wrap">
                                <div className="profile-head">
                                    <a variant="secondary" onClick={handleClose}>
                                        <span className="profile-back">
                                            <svg width={18} height={18} viewBox="0 0 24 24">
                                                <path
                                                    fill="#fff"
                                                    d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                    <span className="profile-right-icons">
                                        <a href='#' onClick={() => setLikesNumber(likesCount + 1)}>
                                            <span className="profile-heart-icon">
                                                <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
                                                    <path
                                                        fill="#fff"
                                                        d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        <a variant="secondary" onClick={handleClose}>
                                            <span className="profile-menu-icon">
                                                <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
                                                    <path
                                                        fill="#fff"
                                                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                                                    />
                                                </svg>

                                            </span>
                                        </a>

                                        {/* dot-dot-section */}

                                        {/* dot-dot-section */}
                                    </span>
                                </div>
                                <div className="profile-img-wrap">
                                    {/* <img
                                        src="https://i.ibb.co/gm2wPs6/IMG-20190928-123715.jpg"
                                        alt="profile image"
                                    /> */}
                                </div>
                                <div className="profile-text-block">
                                    <div className="profile-primary-head">
                                        <h2>John</h2>
                                        <p>UI Developer / UX Developer</p>
                                    </div>
                                    <div className="profile-sub-head">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                    {/* <div className="profile-hire-block">
                                        <a
                                            href="#"
                                            className="hire-btn"
                                            target="_blank"
                                        >
                                            Submit Now
                                        </a>
                                    </div> */}
                                </div>
                                <div className="profile-social-wrap">
                                    <div className="row profile-soc-row">
                                        <div className="col-1-of-3">
                                            {/* <span className="icon-dribbble">
                                                <svg style={{ width: 32, height: 32 }} viewBox="0 0 24 24">
                                                    <path
                                                        fill="#fff"
                                                        d="M16.42,18.42C16,16.5 15.5,14.73 15,13.17C15.5,13.1 16,13.06 16.58,13.06H16.6V13.06H16.6C17.53,13.06 18.55,13.18 19.66,13.43C19.28,15.5 18.08,17.27 16.42,18.42M12,19.8C10.26,19.8 8.66,19.23 7.36,18.26C7.64,17.81 8.23,16.94 9.18,16.04C10.14,15.11 11.5,14.15 13.23,13.58C13.82,15.25 14.36,17.15 14.77,19.29C13.91,19.62 13,19.8 12,19.8M4.2,12C4.2,11.96 4.2,11.93 4.2,11.89C4.42,11.9 4.71,11.9 5.05,11.9H5.06C6.62,11.89 9.36,11.76 12.14,10.89C12.29,11.22 12.44,11.56 12.59,11.92C10.73,12.54 9.27,13.53 8.19,14.5C7.16,15.46 6.45,16.39 6.04,17C4.9,15.66 4.2,13.91 4.2,12M8.55,5C9.1,5.65 10.18,7.06 11.34,9.25C9,9.96 6.61,10.12 5.18,10.12C5.14,10.12 5.1,10.12 5.06,10.12H5.05C4.81,10.12 4.6,10.12 4.43,10.11C5,7.87 6.5,6 8.55,5M12,4.2C13.84,4.2 15.53,4.84 16.86,5.91C15.84,7.14 14.5,8 13.03,8.65C12,6.67 11,5.25 10.34,4.38C10.88,4.27 11.43,4.2 12,4.2M18.13,7.18C19.1,8.42 19.71,9.96 19.79,11.63C18.66,11.39 17.6,11.28 16.6,11.28V11.28H16.59C15.79,11.28 15.04,11.35 14.33,11.47C14.16,11.05 14,10.65 13.81,10.26C15.39,9.57 16.9,8.58 18.13,7.18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                                    />
                                                </svg>
                                            </span> */}
                                            <label>{likesCount}</label>
                                            <p>Like</p>
                                        </div>
                                        <div className="col-2-of-3">
                                            {/* <span className="icon-behance">
                                                <svg style={{ width: 32, height: 32 }} viewBox="0 0 24 24">
                                                    <path
                                                        fill="#fff"
                                                        d="M19.58,12.27C19.54,11.65 19.33,11.18 18.96,10.86C18.59,10.54 18.13,10.38 17.58,10.38C17,10.38 16.5,10.55 16.19,10.89C15.86,11.23 15.65,11.69 15.57,12.27M21.92,12.04C22,12.45 22,13.04 22,13.81H15.5C15.55,14.71 15.85,15.33 16.44,15.69C16.79,15.92 17.22,16.03 17.73,16.03C18.26,16.03 18.69,15.89 19,15.62C19.2,15.47 19.36,15.27 19.5,15H21.88C21.82,15.54 21.53,16.07 21,16.62C20.22,17.5 19.1,17.92 17.66,17.92C16.47,17.92 15.43,17.55 14.5,16.82C13.62,16.09 13.16,14.9 13.16,13.25C13.16,11.7 13.57,10.5 14.39,9.7C15.21,8.87 16.27,8.46 17.58,8.46C18.35,8.46 19.05,8.6 19.67,8.88C20.29,9.16 20.81,9.59 21.21,10.2C21.58,10.73 21.81,11.34 21.92,12.04M9.58,14.07C9.58,13.42 9.31,12.97 8.79,12.73C8.5,12.6 8.08,12.53 7.54,12.5H4.87V15.84H7.5C8.04,15.84 8.46,15.77 8.76,15.62C9.31,15.35 9.58,14.83 9.58,14.07M4.87,10.46H7.5C8.04,10.46 8.5,10.36 8.82,10.15C9.16,9.95 9.32,9.58 9.32,9.06C9.32,8.5 9.1,8.1 8.66,7.91C8.27,7.78 7.78,7.72 7.19,7.72H4.87M11.72,12.42C12.04,12.92 12.2,13.53 12.2,14.24C12.2,15 12,15.64 11.65,16.23C11.41,16.62 11.12,16.94 10.77,17.21C10.37,17.5 9.9,17.72 9.36,17.83C8.82,17.94 8.24,18 7.61,18H2V5.55H8C9.53,5.58 10.6,6 11.23,6.88C11.61,7.41 11.8,8.04 11.8,8.78C11.8,9.54 11.61,10.15 11.23,10.61C11,10.87 10.7,11.11 10.28,11.32C10.91,11.55 11.39,11.92 11.72,12.42M20.06,7.32H15.05V6.07H20.06V7.32Z"
                                                    />
                                                </svg>
                                            </span> */}
                                            <label>12.8K</label>
                                            <p>Followers</p>
                                        </div>
                                        <div className="col-3-of-3">
                                            {/* <span className="icon-fb">
                                                <svg style={{ width: 32, height: 32 }} viewBox="0 0 24 24">
                                                    <path
                                                        fill="#fff"
                                                        d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                                                    />
                                                </svg>
                                            </span> */}
                                            <label>12.8K</label>
                                            <p>Followers</p>
                                        </div>

                                    </div>
                                    <div className="row popup-profile-close-btn justify-content-evenly">
                                        <div className='col-md-4'>
                                            <a
                                                href="#"
                                                className="hire-btn"
                                                target="_blank"
                                            >
                                                Follow
                                            </a>

                                        </div>
                                        <div className='col-md-4'>
                                            <a
                                                href="#"
                                                className="hire-btn"
                                                target="_blank"
                                            >
                                                Profile
                                            </a>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Modal>
            </>
        </div>
    )
}

export default Nevbar
