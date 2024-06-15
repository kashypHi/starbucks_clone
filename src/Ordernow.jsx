
import React from 'react';
import ordernow from "./images/ordernow.png";
import "./index.css";
import "./style.css";


const Ordernow = () => {
  return (
    < >
      <div id="kdiv" className="flex justify-between  items-center p-[50px] h-[100px] cursor-pointer bg-green-950" >
        <h1 className='text-[23px]'>Refreshingly Cool Alert!</h1>
        <button className='border-2 h-[35px] w-[130px] rounded-[36px]'>Know More</button>
      </div>
      <section className='border-2 border-[purple] flex bg-green-800 h-[28vh] w-[85vw] ml-[130px] mt-[30px] cursor-pointer'>
        <div className=''>
          <img className='h-[220px]' src={ordernow} alt="" />
        </div>
        <div className='ml-[3rem] flex flex-col gap-[20px] '>
          <h4 className='font-bold'>Now Brewing</h4>
          <h1 className='font-bold text-[23px]'>Starbucks Menu</h1>
          <h5 className='font-bold'>Indluge in season's feasting!Make your sips extra special! Explore Menu.</h5>
          <span className='font-bold'>Starting From <h3 className='font-bold text-[16px]'>Rs 250</h3></span>
        </div>
        <div>
          <button className='border-2 border-none h-[44px] w-[200px] rounded-[36px] bg-green-700 ml-[28rem] mt-36' >Order now</button>
        </div>


      </section>
    </>
  )
}

export default Ordernow;
