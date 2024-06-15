import React from 'react';
import banncup from "./images/banner_cup.png";
import Footer from './Footer';



const Gift = () => {
  return (
    <>
          <section className='border-2 border-[yellow] h-[38vh] w-[100vw] bg-green-900'>
              <section className='border-2 border-[purple] flex bg-green-800 h-[28vh] w-[85vw] ml-[130px] mt-[30px] cursor-pointer'>
                  <div className=''>
                      <img className='h-[200px]' src={banncup} alt="" />
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
          </section>
         <Footer/>
    </>
  )
}

export default Gift
