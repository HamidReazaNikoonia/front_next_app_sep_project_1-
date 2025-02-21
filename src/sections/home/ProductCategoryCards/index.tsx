import React from 'react'
import Image from 'next/image';

import cardItemForCourse from '@/public/assets/svg/card_item_home_course.svg';
import cardItemForConsult from '@/public/assets/svg/card_item_home_consult.svg';
import cardItemForConsult2 from '@/public/assets/svg/card_item_home_consult_2.svg';
import cardItemForProduct from '@/public/assets/svg/card_item_home_product.svg';

import imageforme from '@/public/assets/images/s1.jpg';



import { Button } from '@/components/ui/button';
import Link from 'next/link';


import SvgSport from './SvgSport';
import SvgTelescop from './svgTelescop';
import SvgFemale from './SvgFemale';
import SvgWomen from './SvgWomen';
import SvgMen from './SvgMen';
import SvgKid from './SvgKid';
import SvgPerfeum from './SvgPerfeum';
import SvgMale from './SvgMale';

// styles
import './styles.css';



export default function ProductCategoryCards() {
  return (
    <div className='container mx-auto py-20 overflow-x-hidden relative'>
      {/* Course Card */}
      <div className='w-full flex flex-col items-center'>
        {/* Header */}
        <div className='text-xs md:text-xl font-semibold text-pink-700 mb-4 md:mb-6'>
          دسته بندی محصولات
        </div>

        <div className='text-lg text-center md:text-4xl font-semibold px-8 md:px-0 text-green-600'>
          محصولاتی که به زندگی شما ارزش می دهند
        </div>


        {/* Card Items */}
        <div className='w-full mt-12 '>
          <div className="wrapper ">

            <a href="#" >
              <p className="align-right">لباس ورزشی</p>
              {/* <img src="https://images.pexels.com/photos/6311237/pexels-photo-6311237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
                <div className='flex justify-center items-center w-full h-[88%] svg transition'>
                <SvgSport />
                </div>
            </a>

            <a href="#" >
              <p>محصولات گرافیکی</p>
              {/* <img src="https://images.pexels.com/photos/5592602/pexels-photo-5592602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
              <div className='flex justify-center items-center w-full h-[80%] svg transition'>
                <SvgTelescop />
                </div>
            </a>

            <a href="#" >
              <p> البسه خانوم ها</p>
              <div className='flex justify-center items-center w-full h-[80%] svg transition'>
                <SvgFemale />
                </div>
              {/* <img src="https://images.pexels.com/photos/6995870/pexels-photo-6995870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </a>

            <a href="#" >
              <p>زنانه </p>
              <div className='flex justify-center items-center w-full h-[90%] svg transition'>
                <SvgWomen />
                </div>
              {/* <img src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </a>

            <a href="#" >
              <p>مردانه</p>
              <div className='flex justify-center items-center w-full h-[90%] svg transition'>
                <SvgMen />
                </div>
              {/* <img src="https://images.pexels.com/photos/5325710/pexels-photo-5325710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </a>

            <a href="#" >
              <p>بچه گانه</p>
              <div className='flex justify-center items-center w-full h-[88%] svg transition'>
                <SvgKid />
                </div>
              {/* <img src="https://images.pexels.com/photos/4715329/pexels-photo-4715329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </a>

            <a href="#" >
              <p className="align-right">عطر و ادکلن</p>
              <div className='flex justify-center items-center w-full h-[92%] svg transition'>
                <SvgPerfeum />
                </div>
              {/* <img src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </a>

            <a href="#" >
              <p> مردانه</p>
              <div className='flex justify-center items-center w-full h-[98%] svg transition'>
                <SvgMale />
                </div>
              {/* <img src="https://images.pexels.com/photos/19606373/pexels-photo-19606373/free-photo-of-smiling-men-in-shirts-standing-together-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </a>



          </div>


        </div>
      </div>

      {/* Particle */}
      {/* <div className=' absolute w-full top-0 left-0' id="parallax" style={{transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", pointerEvents: "none"}} >
                    <div className="header-shape shape-one" data-depth="0.10" style={{transform: "translate3d(-5.6px, -4.9px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "relative", display: "block", left: "90px", top: "0px"}}>
                        <img src="https://i.postimg.cc/J7bRR2cK/shape-1.png" alt="image" />
                    </div>

                    <div className="header-shape shape-two" data-depth="0.30" style={{transform: "translate3d(-16.7px, -14.6px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "absolute", display: "block", right: "40px", top: "30px" }}>
                        <img src="https://i.postimg.cc/437TqLx6/shape-2.png" alt="image" />
                    </div>

                    <div className="header-shape shape-three" data-depth="0.40" style={{transform: "translate3d(-22.3px, -19.5px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "absolute", display: "block", left: "0px", top: "0px"  }}>
                        <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="image" />
                    </div>

                    <div className="header-shape shape-four" data-depth="0.60" style={{transform: "translate3d(-33.4px, -29.2px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "absolute", display: "block", left: "0px", top: "0px"  }}>
                        <img src="https://i.postimg.cc/437TqLx6/shape-2.png" alt="image" />
                    </div>

                    <div className="header-shape shape-five" data-depth="0.20" style={{transform: "translate3d(-11.1px, -9.7px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "absolute", display: "block", left: "0px", top: "0px" }} >
                        <img src="https://i.postimg.cc/J7bRR2cK/shape-1.png" alt="image" />
                    </div>

                    <div className="header-shape shape-six" data-depth="0.15" style={{transform: "translate3d(-8.4px, -7.3px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "absolute", display: "block", left: "0px", top: "0px"  }}>
                        <img src="https://i.postimg.cc/bNyfpNvN/shape-4.png" alt="image" />
                    </div>

                    <div className="header-shape shape-seven" data-depth="0.50" style={{transform: "translate3d(-27.9px, -24.4px, 0px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden", position: "absolute", display: "block", left: "0px", top: "0px"  }}>
                        <img src="https://i.postimg.cc/9FL5M54P/shape-5.png" alt="image" />
                    </div>

                </div> */}


    </div>
  )
}



