import React from 'react'
import leaf from "./images/leaf_gold.svg";
import Footer from './Footer';

const LoginSignUp = () => {
  return (
    <>
          <div className='border-2 h-[22rem]'>
              <img src={leaf} alt="" />
              <h1 className='text-[40px] text-center'>Welcome to Starbucks</h1>
              <button className='border bg-[black] text-[white] h-10 w-44 rounded-[42px] ml-[42rem] mt-5'> Login or SignUp </button>
          </div> 

          <div className='border-2 flex justify-start gap-9 ml-24 text-[25px]'>
                  <img src="https://www.starbucks.in/assets/icon/help_centre.svg" alt="" />
                  <h2>HELP CENTER</h2>
          </div>
          <Footer/>
    </>
  )
}

export default LoginSignUp
