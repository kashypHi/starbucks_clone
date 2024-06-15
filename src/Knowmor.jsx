
import React from 'react';
import Bestseller from "./images/Bestseller.webp";
import Drink from "./images/Drinks.webp";
import Food from "./images/Food.webp";
import Merchendise from "./images/Merchandise.webp";
import coffee from "./images/CoffeeAtHome.webp";
import Ready from "./images/ReadyToEat.webp";
import "./index.css";
import "./style.css";

const Knowmor = () => {
  return (
    <>
         
          <section id="kcoffee">
              <h1 className='mb-[25px] ml-[120px] text-[25px]  font-bold'>Handcrafted Curations</h1>
              <div  className='flex justify-evenly' id='itemhov'>
                  <span><img src={Bestseller} alt="" />Bestseller</span>
                  <span><img src={Drink} alt="" />Drink</span>
                  <span><img src={Food} alt="" />Food</span>
                  <span><img src={Merchendise} alt="" />Merchendise</span>
                  <span><img src={coffee} alt="" />coffeeAtHome</span>
                  <span><img src={Ready} alt="" />ReadyToEat</span>
              </div>
          </section>
    </>
  )
}

export default Knowmor
