import React, { use, useState } from 'react';
import Showproduct from './Showproduct';
import Cart from './Cart';

const Product = ({fetchdata,selectbtn,setselectbtn}) => {
    // console.log(fetchdata);
    const finaldata=use(fetchdata);
    // console.log(finaldata);

    const [btntoggle,setbtntoggle]=useState('Products');
    // const [selectbtn,setselectbtn]=useState([]);
    return (
        <div>
            <div className='mt-10 text-center'>
                <h1 className='font-bold text-2xl'>Premium Digital Tools</h1>
                <p className='text-xs text-gray-700 mt-3'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='mt-7'>
                    <button onClick={()=> setbtntoggle('Products')} className={`btn ${btntoggle==='Products'? "bg-amber-500":"bg-gray-300"} `}>Products</button>
                    <button onClick={()=> setbtntoggle('Cart')} className={`btn ${btntoggle==='Cart'? "bg-amber-500":"bg-gray-300"} `}>Cart ({selectbtn.length})</button>
                </div>
            </div>
            {
                btntoggle==='Products'?<Showproduct finaldata={finaldata} selectbtn={selectbtn} setselectbtn={setselectbtn}></Showproduct>:<Cart selectbtn={selectbtn} setselectbtn={setselectbtn} finaldata={finaldata}></Cart>
            }

           {/* <Showproduct finaldata={finaldata}></Showproduct> */}
        </div>
    );
};

export default Product;