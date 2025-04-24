import React from 'react';
import { FaSearch } from "react-icons/fa";
import { RiFolder6Fill } from "react-icons/ri";
import { HiMap } from "react-icons/hi";
import { GiStoneSphere } from "react-icons/gi";
import { BsStack } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';
// import './css/Navbar.css';
import './css/Sidebar.css';

function NavbarWithSidebar() {
    return (
        <>
            <div className='container-body'>
                <div className='Navbar_body'>
                    <nav className="nav">
                        <div className="logo">
                            <span className='nav-menu'>C</span>
                            <img className='logo-img' src="logo.jpg" alt="Logo" />
                            <span className='logo-name h4'>Tourist</span>
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
                                <div className='sidebar-icon'><Link to="/"><RiFolder6Fill /></Link></div>
                                <div className='sidebar-icon'><Link to="/about"><HiMap /></Link></div>
                                <div className='sidebar-icon'><Link to="/contact"><BsStack /></Link></div>
                                <div className='sidebar-icon'><Link to="/contact"><GiStoneSphere /></Link></div>
                                <div className='sidebar-icon'><Link to="/contact"><FaCanadianMapleLeaf /></Link></div>
                            </div>
                            <div className="bottom-icon">
                                <div className='sidebar-icon'><Link to="/settings"><IoSettingsSharp /></Link></div>
                            </div>
                        </div>

                        <div className="sidebar-men">
                            <p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p>
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
