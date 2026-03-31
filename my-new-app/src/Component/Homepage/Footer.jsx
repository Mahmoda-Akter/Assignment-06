import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer grid grid-cols-2 md:grid-cols-5 bg-black text-white text-base-content p-20 place-items-center">
                <aside>
                    <h1 className='font-bold text-4xl'>DigiTools</h1>
                    <p className='mt-4 text-gray-300'>
                        Premium digital tools for creators,<br/>
                        professionals, and businesses. Work smarter<br/>
                         with our suite of powerful tools.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex gap-4'>
                        <a className="link link-hover"><FaInstagram /></a>
                        <a className="link link-hover"><FaFacebook /></a>
                        <a className="link link-hover"><FaXTwitter /></a>
                    </div>
                    
                </nav>
                
            </footer>
            <hr className='border border-gray-400 w-[80%] mx-auto mb-10'/>
            <div className='flex justify-between items-center bg-black text-white w-[80%] mx-auto'>
                <p className='mb-7'>© 2026 Digitools. All rights reserved.</p>
                <div className='flex justify-end gap-5 mb-7'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Footer;