  import { toast } from 'react-toastify';

const Cart = ({selectbtn,setselectbtn}) => {
    const removeall=()=>{
        setselectbtn([]);
        toast("remove all items from the cart!");
    }

    const handledeletebtn=(selectbtnitem)=>{
        //  console.log( selectbtnitem.name)
          let filterdeletebtn=selectbtn.filter(filteritem=> filteritem.name!== selectbtnitem.name);
          setselectbtn(filterdeletebtn)
          toast("Item remove from the cart!");
    }
    const totleprice=selectbtn.reduce((sum,item)=> sum+item.price,0);
    console.log(totleprice)

    console.log(selectbtn);
    return (
        <div className='w-[80%] mx-auto mt-10 grid grid-cols-1 gap-5 bg-white shadow-lg shadow-gray-500 p-5'>
            {
              selectbtn.length===0?
              <div className='text-center'>
                <h1 className='font-bold text-2xl'>NO data available here</h1>
                <p>Pleace click to the button for add to the cart</p>
              </div>:
              selectbtn.map(selectbtnitem=> {
                return(
                    <div className='flex justify-between items-center bg-gray-200  border border-amber-300'>
                                    <div className='flex  gap-7 p-7'>
                                        <div className='mt-3'>
                                            <img src={selectbtnitem.icon} />
                                        </div>
                                        <div>
                                            <p>{selectbtnitem.name}</p>
                                            <p className='mt-2'>$ {selectbtnitem.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={()=>handledeletebtn(selectbtnitem)} className="btn btn-neutral">Delete</button>
                                    
                    </div>
                    
                    
                )
                
              })
              
            }
            <div className='bg-amber-500 flex justify-between items-center p-4'>
                <p className='text-2xl font-bold'>totle count</p>
                <span className='font-bold text-2xl'>${totleprice}</span>
            </div>
            <div>
                <button onClick={()=> removeall()} className='w-full bg-violet-500 p-3 rounded-3xl text-white'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;