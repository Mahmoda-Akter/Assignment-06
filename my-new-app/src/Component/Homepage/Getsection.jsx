import React from 'react';
import userimg from '../../../public/assets/user.png'
import pacagimg from '../../../public/assets/package.png'
import rocketimg from '../../../public/assets/rocket.png'

const Getsection = () => {
    return (
        <div>
        
            <div className='mt-20 text-center'>
                <h1 className='font-bold text-3xl'>Get Started in 3 Steps</h1>
                <p className='text-xs mt-3 text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-11/14 mx-auto gap-4 place-items-center mt-10 '>
                <div className=' text-center p-5 shadow-lg shadow-gray-400'>
                    <div className='text-end'>
                        <span className='bg-blue-500 rounded-full p-3'>01</span>
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <img src={userimg}/>
                    </div>
                    <div className='mb-7'>
                        <h3 className='font-bold text-xl mt-4'>Create Account</h3>
                        <p className='text-xs text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className=' text-center p-5 shadow-lg shadow-gray-400'>
                    <div className='text-end'>
                        <span className='bg-blue-500 rounded-full p-3'>02</span>
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <img src={pacagimg}/>
                    </div>
                    <div className='mb-7'>
                        <h3 className='font-bold text-xl mt-4'>Choose Products</h3>
                        <p className='text-xs text-gray-400'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className=' text-center p-5 shadow-lg shadow-gray-400'>
                    <div className='text-end'>
                        <span className='bg-blue-500 rounded-full p-3'>03</span>
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <img src={rocketimg}/>
                    </div>
                    <div className='mb-7'>
                        <h3 className='font-bold text-xl mt-4'>Start Creating</h3>
                        <p className='text-xs text-gray-400'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Getsection;