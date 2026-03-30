import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const Navebar = ({selectbtn}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-violet-600 font-bold text-2xl">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div>
                        <span className='bg-blue-300 relative top-2 left-6 text-xs p-1 rounded-full'>{selectbtn.length}</span>
                        <FaCartArrowDown size={30}/>
                    </div>
                    <p>Login</p>
                    <button class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    );
};

export default Navebar;