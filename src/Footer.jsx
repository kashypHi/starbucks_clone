import React from 'react';
import appstore from "./images/appstoreiOS.png";
import gplay from "./images/gplay.png";
import startlogo from "./images/starlogo.png";

const Footer = () => {
    return (
      <>
      <section id='foot' className='h-[80vh] w-[100vw] bg-[#0E382C] flex justify-evenly mt-10 text-[white] pt-[7rem] cursor-pointer'>
          <div className='ml-[40px]'>
              <img src={startlogo} alt="" />
          </div>
          <div className='leading-10 ml-[100px]'>
              <h1>About Us</h1>
              <p>Our Heritage</p>
              <p>CoffeeHouse</p>
              <p>OurCompany</p>
          </div>
          <div className='leading-10 ml-[70px]'>
              <h1>Responsibility</h1>
              <p>Diversity</p>
              <p>Community</p>
              <p>Ethical Sourcing</p>
              <p>Environment Stewardship</p>
              <p>Learn More</p>
          </div>
          <div className='leading-10 ml-9'>
              <h1>Quick Links</h1>
              <p>Privacy Policy</p>
              <p>FAQs</p>
              <p>Terms and Conditions</p>
              <p> Starbucks India Mobile App Terms of Use</p>
              <p>Customer Service</p>
              <p>Starbucks Rewards Day Offer</p>
              <p>Delivery</p>
              <p>Season's Gifting</p>
              <p>Offer for Beverage Subscription at Starbucks.</p>
              <p>Beverage Subscription</p>
          </div>
          <div className='leading-10 mr-[2rem] flex flex-col gap-3'>
              <h1>SOCIAL MEDIA</h1>
              <div className='flex gap-7'>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
              </div>
          </div>
          <div className='mr-[4rem]'>
              <img src={appstore} alt="" />
              <img src={gplay} alt="" />
                </div>
                
            </section>
            <hr />
            <div className='w-[100vw] bg-[#0E382C] flex justify-evenly text-[white] cursor-pointer pt-10'>
                <div className='flex justify-evenly gap-6 mb-5 mr-[34rem]'>
                    <p>Web Accessibility |</p>
                    <p>Privacy Statement |</p>
                    <p>Terms of Use |</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <p className='text-[10px]'>© 2024 Starbucks Coffee Company. All rights reserved.</p>
                </div>
            </div>
        </>
      
  )
}

export default Footer
