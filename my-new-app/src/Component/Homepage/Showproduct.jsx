import React from 'react';
import Productitem from './Productitem';

const Showproduct = ({finaldata,selectbtn,setselectbtn}) => {
    // console.log(finaldata);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 w-[80%] mx-auto mt-10'>
             {
                finaldata.map(productitems=> <Productitem productitems={productitems} selectbtn={selectbtn} setselectbtn={setselectbtn}></Productitem>)
             }
        </div>
    );
};

export default Showproduct;