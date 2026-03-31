import React from 'react';
import banner from '../../../public/assets/banner.png';
import play from '../../../public/assets/Play.png';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen w-[80%] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-sm rounded-lg shadow-2xl w-full"
                    />
                    <div>
                        <p><span className='bg-gray-300 p-2 rounded-2xl'>New: AI-Powered Tools Available</span></p>
                        <h1 className=" text-2xl md:text-6xl font-bold mt-4">Supercharge Your Digital Workflow</h1>
                        <p className="md:py-6 md:text-xl">
                           Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                        </p>
                        <button className="btn btn-primary rounded-4xl">Explore Products</button>
                        <button className="btn btn-outline btn-primary ml-3 rounded-4xl"><img src={play}/> Watch Demo</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Banner;