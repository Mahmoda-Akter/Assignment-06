import React, { useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
// import tool from '../../assets/design-tool.png';


const Productitem = ({productitems,selectbtn,setselectbtn}) => {
    console.log(productitems);
    const [isbyebtn,setisbyebtn]=useState(false);

    const handlebyenowbtn=(productitems)=>{
        setselectbtn([...selectbtn,productitems]);
        setisbyebtn(true);
        toast.success("Item added to the cart!");

        
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm ">
                <div className="card-body ">
                    <div className='flex justify-between items-center'>
                        <img className='h-[30px] w-[30px] object-fill' src={productitems.icon}/>
                        <span className="text-xs bg-amber-300 p-2 rounded-3xl">{productitems.tagType}</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{productitems.name}</h2>
                        <p>{productitems.description}</p>
                        
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <p className='text-2xl font-bold'>${productitems.price}/{productitems.period}</p>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{productitems.features[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{productitems.features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{productitems.features[2]}</span>
                        </li>
                        
                    </ul>
                    <div className="mt-6">
                        <button onClick={()=> handlebyenowbtn(productitems)} className="btn btn-primary btn-block">{isbyebtn===true?<h1>Add to cart</h1>:"Bye now"}</button>
                    </div>
                </div>
            </div> 
            
        </div>
        
    );
};

export default Productitem;