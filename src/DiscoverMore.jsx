import React from 'react';

import "./index.css";
import "./style.css";
import bgimg from "./images/discoverImg.jpg";

const DiscoverMore = () => {
  return (
    <React.Fragment>
      <div className='h-[6vh]  bg-white'></div>
      <section id="dispic" className='' >
  
        <div className='flex justify-between pt-8'>
          <h1 className='text-[30px] font-bold ml-[8rem]'>Learn more about the world of coffee!</h1>
          <h5 className='font-bold mr-[120px] mt-3 text-green-900'>Discover More</h5>
        </div>

        <section id="target" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='h-[50vh] w-[85vw] mt-[2rem] ml-[8rem] flex justify-between flex-col rounded-[10px] cursor-pointer '>
          
          <button className='h-[24px] w-[100px] bg-green-50 text-[green] rounded-[5px] m-6'>Coffee culture</button>
          <div className='flex flex-col gap-2 ml-9 mt-[7rem]'>
            <h1 className='text-[30px] font-bold text-[white]'> Art & Science Of Coffee Brewing</h1>
            <h4 className='text-[15px] text-[white]'>Master the perfectbrew with Starbuks! Learn the art and Science of Coffee brewing.</h4>
          </div>
          <div>
            <button className='h-[33px] w-[220px] bg-green-50  rounded-[20px] m-8' >Learn More</button>
          </div>
        </section>
      </section>
    </React.Fragment>
  )
}

export default DiscoverMore
