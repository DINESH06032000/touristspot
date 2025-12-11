import React from 'react';
import { FaSearch } from "react-icons/fa";
import { RiFolder6Fill } from "react-icons/ri";
import { HiMap } from "react-icons/hi";
import { GiStoneSphere } from "react-icons/gi";
import { BsStack } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, NavLink, Outlet } from 'react-router-dom';
// import './css/Navbar.css';
import { FaCompass } from "react-icons/fa";
import './css/Sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarWithSidebar() {
    return (
        <>
            <div className='container-body'>
                <div className='Navbar_body'>
                    <nav className="nav">
                        <div className="logo">
                            <span className='nav-menu'>C</span>
                            <img className='logo-img' src="logo.jpg" alt="Logo" />
                            <span className='logo-name'>Tourist</span>
                        </div>
                        <div className="menu" id="menu">
                            <span className='nav-user'>User Name</span>
                            <span className='nav-search'>
                                <FaSearch />
                            </span>
                        </div>
                    </nav>

                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="sidebar-menu">
                            <div className="top-icons">
                                <div className='sidebar-icon'><NavLink to="/" className={({ isActive }) =>
                                    isActive ? 'sidebar-link active' : 'sidebar-link'
                                } ><RiFolder6Fill className='sidebar-i' /></NavLink></div>
                                <div className='sidebar-icon'><NavLink to="/about" className={({ isActive }) =>
                                    isActive ? 'sidebar-link active' : 'sidebar-link'
                                }><HiMap className='sidebar-i' /></NavLink></div>
                                <div className='sidebar-icon'><NavLink to="/contact" className={({ isActive }) =>
                                    isActive ? 'sidebar-link active' : 'sidebar-link'
                                }><BsStack className='sidebar-i' /></NavLink></div>
                                <div className='sidebar-icon'><NavLink to="/contact" className={({ isActive }) =>
                                    isActive ? 'sidebar-link active' : 'sidebar-link'
                                }><GiStoneSphere className='sidebar-i' /></NavLink></div>
                                <div className='sidebar-icon'><NavLink to="/contact" className={({ isActive }) =>
                                    isActive ? 'sidebar-link active' : 'sidebar-link'
                                }><FaCanadianMapleLeaf className='sidebar-i' /></NavLink></div>
                            </div>
                            <div className="bottom-icon">
                                <div className='sidebar-icon'><Link to="/settings" className={({ isActive }) =>
                                    isActive ? 'sidebar-link active' : 'sidebar-link'
                                }><IoSettingsSharp className='sidebar-i' /></Link></div>
                            </div>
                        </div>

                        <div className="sidebar-men">
                            <div className="sidebar-topics">
                                <div>
                                    <p>GENERAL</p>
                                    <p>OVERVIEW</p>
                                </div>
                                <div><FaCompass /></div>
                            </div>
                            <div className='sidebar-top'>
                                <div>21&deg;N 78&deg;E</div>
                                <div>INDIA</div>
                                <div></div>
                            </div>
                            <div className='sidebar-mid'>
                                <div >
                                    <p>TRENDING</p>
                                    <p>DESTINATIONS</p>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="images/delhi.png" alt="" style={{width:"100%"}}/>
                                            </div>
                                            <div className="col-8">
                                                <p>Name</p>
                                                <p>Location</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src="images/delhi.png" alt="" style={{width:"100%"}}/>
                                            </div>
                                            <div className="col-8">
                                                <p>Name</p>
                                                <p>Location</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NavbarWithSidebar;
