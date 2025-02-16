import React from 'react'
// imageSrc, title, link
// 

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

import avatarImage from '@/public/assets/images/avatar.png'
import product_placeholder from "@/public/assets/images/s4.jpg";

interface WebinarCardProps {
  title: string;
  subtitle: string;
  category: string;
  speaker: string;
  speakerImage: string;
  imageSrc: string;
}

const CourseCardItem: React.FC<WebinarCardProps> = ({
  title,
  subtitle,
  category,
  speaker,
  speakerImage,
  imageSrc,
}) => {
  return (
    <div dir="rtl" className="bg-white relative shadow-lg rounded-lg overflow-hidden flex flex-col p-4">
      {/* Banner */}
      <div className=" w-full relative">
        {product_placeholder && (
          <Image
            src={product_placeholder}
            alt="Webinar Banner"
            quality={100}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="rounded-lg"
          />
        )}


        <div className="mt-2.5 mb-2 flex items-center justify-end z-10 absolute bottom-2 left-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              strokeWidth={1}
              size={18}
              fill={index < 3 ? "#facc15" : "gray"}
              stroke="none"
            />
          ))}
          <span className="mr-2 pt-1 rounded bg-yellow-300 text-black px-2.5 py-0.5 text-xs font-semibold">{3}</span>

          {/* <Star  stroke='gray' fill='none' size={18} />       */}
        </div>

      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-sm md:text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-gray-500 text-xs mt-1">{category}</p>





        <p className="text-gray-600 text-xs leading-6 mt-5">{subtitle}</p>

          {/* Bottom Side */}

        <div className='flex justify-between w-full items-center'>
            {/* Speaker */}
        <div className="flex items-center gap-2 mt-6">
          <Image
            src={speakerImage || avatarImage}
            alt={speaker}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-gray-800 text-sm font-medium">{speaker}</span>
        </div>


        {/* Price */}
        <div className="flex items-center gap-2 mt-8">  
          <span className="text-gray-800 text-lg font-medium"> <span className='font-bold'>{(500000).toLocaleString('fa')}</span> تومان</span>
          </div>
        </div>
      </div>

      {/* Registration Button */}
      <div className="absolute top-8 left-0 ">
        <Button className="bg-red-500 text-white text-sm px-4 py-2 rounded-r-lg rounded-l-none shadow-lg hover:bg-red-600">
          ثبت نام دوره
        </Button>
      </div>
    </div>
  );
};

export default CourseCardItem;

