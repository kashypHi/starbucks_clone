
// import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
// import Navbar from './Navbar'
import thim from "./images/account_thin.svg";
import logo from "./images/starlogo.png";
import "./index.css";
import "./style.css";
import React from 'react';

const Navbar = () => {
  return (
    <div>
      {/* <h1>THIS IS NAVLINKS</h1> */}
      {/* <Navbar></Navbar> */}
      <section className='sticky top-0 bg-white cursor-pointer z-10' >
        <div className="flex justify-around item-center border-2">
          <img src={logo} alt="" />
          <NavLink to="/">
            <h2 className="m-[20px]">Home</h2>
          </NavLink>

          <NavLink to="gift"><h2 className="m-[20px]">Gift</h2>
          </NavLink>
          <NavLink to="order">
            <h2 className="m-[20px]">Order</h2>
          </NavLink>
          <NavLink to="pay">
            <h2 className="m-[20px]">Pay</h2>
          </NavLink>
          <NavLink to="store">
            <h2 className="m-[20px]">Store</h2>
          </NavLink>
          <div>
            <img src="https://www.starbucks.in/assets/icon/search.svg" className='relative top-7 left-3' alt="" />
            <input className="border-2 rounded-[35px] p-[5px] w-[16rem] px-[2rem]  text-[13px] overflow-x-hidden" type="text" placeholder="Looking for something specific?" />
          </div>
          <NavLink to="login" >
            <img src={thim} alt="" className='mt-[1rem]' />
          </NavLink>
        </div>


      </section>



      <Outlet></Outlet>

    </div>
  )
}

export default Navbar;
