// import React, { useState } from 'react';
import Productitem from './Productitem';

const Showproduct = ({finaldata,selectbtn,setselectbtn}) => {
    
    // console.log(finaldata);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] mx-auto place-items-center mt-10'>
             {
                finaldata.map(productitems=> <Productitem productitems={productitems} selectbtn={selectbtn} setselectbtn={setselectbtn} ></Productitem>)
             }
        </div>
    );
};

export default Showproduct;