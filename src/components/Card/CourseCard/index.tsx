import React from 'react'
// imageSrc, title, link
// 

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Presentation, Videotape, BookCheck } from 'lucide-react';

import avatarImage from '@/public/assets/images/avatar.png'
import product_placeholder from "@/public/assets/images/s4.jpg";
import { filterPriceNumber } from '@/utils/Helpers';
import { ICourseTypes } from '@/types/Course';
import Link from 'next/link';


const NEXT_PUBLIC_SERVER_FILES_URL = process.env.NEXT_PUBLIC_SERVER_FILES_URL || '';

interface WebinarCardProps {
  data?: ICourseTypes;
}


const mockData = {
  title: 'دوره بازیگری',
  sub_title: "تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم.",
  speaker: 'مهدی محمدی',
  speakerImage: undefined,
  is_have_licence: true,
  course_type: "HOZORI",
  course_status: true,
  score: 3,
  price: 50000000,
  course_category: {
    name: 'بازیگری'
  }
}

const CourseCardItem: React.FC<WebinarCardProps> = ({
  data
}) => {


  const {
    _id,
    title,
    sub_title,
    course_status,
    is_have_licence,
    tumbnail_image,
    course_category,
    course_type,
    score,
    coach_id,
    price,
  } = data || mockData;

  return (
    <Link href={`/course/${_id}`}>
      <div dir="rtl" className="bg-white relative shadow-lg rounded-lg overflow-hidden flex flex-col p-4 hover:opacity-70">
        {/* Banner */}
        <div className=" w-full relative">
          {product_placeholder && (
            <Image
              src={tumbnail_image?.file_name ? `${NEXT_PUBLIC_SERVER_FILES_URL}/${tumbnail_image?.file_name}` : product_placeholder}
              alt="Webinar Banner"
              quality={100}
              width={300}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="rounded-lg"
            />
          )}


          <div className="mt-2.5 mb-2 flex items-center justify-end z-10 absolute bottom-2 left-4">
            {score && Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                strokeWidth={1}
                size={18}
                fill={index < score ? "#facc15" : "gray"}
                stroke="none"
              />
            ))}
            <span className="mr-2 pt-1 rounded bg-yellow-300 text-black px-2.5 py-0.5 text-xs font-semibold">{3}</span>

            {/* <Star  stroke='gray' fill='none' size={18} />       */}
          </div>

        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-4">
          <div className='flex justify-between'>
            <h2 className="text-sm md:text-lg font-bold text-gray-900">{title}</h2>

            {/* enum: ['HOZORI', 'OFFLINE'] */}
            {course_type === 'OFFLINE' ? (
              <div className='flex gap-2 yellow-gradient-bg px-4 md:px-5 py-1.5 rounded-2xl items-center'>
                <h2 className="text-xs md:text-sm font-semibold text-gray-900">آنلاین</h2>
                <Videotape />
              </div>) : (
              <div className='flex gap-2 yellow-gradient-bg px-4 md:px-5 py-1.5 rounded-2xl items-center'>
                <h2 className="text-xs md:text-sm font-semibold text-gray-900">حضوری</h2>
                <Presentation />
              </div>
            )
            }



          </div>
          <p className="text-gray-500 text-xs mt-1">{course_category && course_category?.name}</p>





          <p className="text-gray-600 text-xs leading-6 mt-5">{sub_title}</p>

          {/* Bottom Side */}

          <div className='flex justify-between w-full items-center'>
            {/* Speaker */}
            <div className="flex items-center gap-2 mt-6">
              <Image
                src={avatarImage}
                alt={'coach_id'}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-gray-800 text-sm font-medium">{`مریم صفدری`}</span>
            </div>


            {/* Price */}
            <div className="flex items-center gap-2 mt-8">
              <span className="text-gray-800 text-lg font-medium"> <span className='font-bold'>{filterPriceNumber(price)}</span> تومان</span>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        {is_have_licence && (
          <div className="absolute top-8 left-0 ">
            <Button className="bg-red-500 text-white text-sm px-4 py-2 rounded-r-lg rounded-l-none shadow-lg hover:bg-red-600">
              دارای گواهی
              <BookCheck />
            </Button>
          </div>
        )}

      </div>
    </Link>


  );
};

export default CourseCardItem;

