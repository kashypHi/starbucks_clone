import React from 'react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Assests.js
import assests from "./assests/SwiperAssest";

const Slider = () => {
    console.log(assests);
    //     {
    //         assests.map((val, ind) => {
    //             console.log(val,ind);
    //         })
    // }

    return (
        <section className=' border-2  p-[2rem]'>
            <div className='flex justify-between p-[2rem] font-bold text-[25px]'>
                <h1>Barista Recommends</h1>
                {/* here we use navlink for except anchor tag */}
                <h4><a href="">View More</a></h4>
            </div>
            <div >
                <Swiper slidesPerView={3}
                    spaceBetween={60}
                    navigation={true} modules={[Navigation]} className="mySwiper" >

                    {assests.map((val, ind) => {
                        console.log(val, ind);

                        return (
                            <React.Fragment >
                                <SwiperSlide>
                                    <section className='border-4 border-[none]  flex gap-4 h-[25vh] w-[60vh]  p-[30px] '>
                                        <div className='h-[60%]'>
                                            <img src={val.image} alt="" className='h-[30%]' />
                                            <h3 className='mt-[18px]'>{val.price}</h3></div>

                                        <div className='h-[16px] w-[16px]  '><img src="https://starbucks.in/assets/icon/veg.svg" alt="" />
                                            <div className='h-[60px] w-[250px] '>
                                                <h2 className='font-bold mr-[6rem]'>{val.quality}</h2>
                                                <h4 className='text-[9px] mr-[7rem]'>{val.weight}</h4>
                                            </div>
                                        </div>
                                        <div className=' border-2 h-[35px] w-[130px] rounded-[36px] bg-green-800 mt-[100px] ml-[130px] '>
                                            <button className='text-white pt-1'>Add item</button>

                                        </div>
                                    </section>
                                </SwiperSlide>
                            </React.Fragment>
                        )
                    })
                    }
                </Swiper>
            </div>

        </section>
    )
};

export default Slider;
