
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Homepage/Banner'
import Navebar from './Component/Homepage/Navebar'
import Product from './Component/Homepage/Product'
import Stats from './Component/Homepage/Stats'
import Getsection from './Component/Homepage/Getsection'
import Pricing from './Component/Homepage/Pricing'
import Transsection from './Component/Homepage/Transsection'
import Footer from './Component/Homepage/Footer'

const fetchjsondata=async()=>{
    const res=await fetch('/Data.json')
    return res.json();
} 


function App() {
   const fetchdata=fetchjsondata();
   const [btntoggle,setbtntoggle]=useState('Products');
   const [selectbtn,setselectbtn]=useState([]);

  return (
    <>
      <Navebar selectbtn={selectbtn} setselectbtn={setselectbtn}></Navebar>
      <Banner></Banner>
      <div className='flex justify-center mx-auto'>
        <Stats></Stats>
      </div>
      <Suspense fallback="loding data...">
        <Product fetchdata={fetchdata} selectbtn={selectbtn} setselectbtn={setselectbtn} btntoggle={btntoggle} setbtntoggle={setbtntoggle}></Product>
      </Suspense>
      
      {
        btntoggle==='Products' && <Getsection></Getsection>
      }
      {
        btntoggle==='Products' && <Pricing></Pricing>
      }
      {
        btntoggle==='Products' && <Transsection></Transsection>
      }
      {
        btntoggle==='Products' && <Footer></Footer>
      }
      
      
      
    </>
  )
}

export default App
