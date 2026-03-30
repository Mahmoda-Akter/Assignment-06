// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Homepage/Banner'
import Navebar from './Component/Homepage/Navebar'
import Product from './Component/Homepage/Product'
import Stats from './Component/Homepage/Stats'

const fetchjsondata=async()=>{
    const res=await fetch('/Data.json')
    return res.json();
} 


function App() {
   const fetchdata=fetchjsondata();
   const [selectbtn,setselectbtn]=useState([]);

  return (
    <>
      <Navebar selectbtn={selectbtn} setselectbtn={setselectbtn}></Navebar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback="loding data...">
        <Product fetchdata={fetchdata} selectbtn={selectbtn} setselectbtn={setselectbtn}></Product>
      </Suspense>
    </>
  )
}

export default App
