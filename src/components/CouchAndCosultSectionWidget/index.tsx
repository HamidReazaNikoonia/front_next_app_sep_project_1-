'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { ChevronLeft } from 'lucide-react';

import './styles.css';

import CoachImage from '@/public/assets/images/sec-1-l.webp';

const options1= [
  { value: "option1", label: "مشاوره خانواده" },
  { value: "option2", label: "مشاوره فرهنگی" },
  { value: "option3", label: "مشاوره اعتیاد" },
  { value: "option4", label: "مشاوره اعتیاد" },
  { value: "option5", label: "مشاوره اعتیاد" },
  { value: "option6", label: "مشاوره اعتیاد" },
  { value: "option7", label: "مشاوره اعتیاد" },
  { value: "option8", label: "مشاوره اعتیاد" },
  { value: "option9", label: "مشاوره اعتیاد" },
  { value: "option10", label: "مشاوره اعتیاد" },

];


const options2= [
  { value: "HOZORI", label: "مشاوره حضوری" },
  { value: "OFFLINE", label: "مشاوره آنلاین" },

];


export function CustomRadioForm({options}) {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

 

  return (
    <form className="flex flex-row gap-3 py-4 mx-auto max-w-lg flex-wrap w-full">
      {options.map((option) => (
        <div key={option.value} className="relative">
          <input
            type="radio"
            id={option.value}
            name="customRadio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => setSelectedOption(option.value)}
            className="hidden"
          />
          <label
            htmlFor={option.value}
            className={`cursor-pointer block px-4 py-2 rounded-2xl border transition-all shadow-sm text-center text-sm font-medium
              ${selectedOption === option.value ? "yellow-gradient-bg text-black border-blue-500" : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
          >
            {option.label}
          </label>
        </div>
      ))}
      {/* <button
        type="submit"
        className="mt-4 px-4 py-2 rounded-2xl bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
      >
        Submit
      </button> */}
    </form>
  );
}


export default function CouchAndCosultSectionWidget() {
  return (
    <div className='py-12 px-8 w-full flex flex-col md:flex-row justify-between items-center'>




      {/* Left Section Image */}
      <div className='flex flex-col justify-center items-center '>



        <div className='bg-white px-8 rounded-3xl'>
          <Image className='' src={CoachImage} alt='Coach Image' />
        </div>

      </div>


      {/* Rigth Section */}
      <div dir='rtl' className="bg-inherit flex-col flex rounded-xl p-6">
        <h2 className=" md:text-24px text-20px font-bold mt-8 md:mt-0"> پیدا کردن  مشاور </h2>
        <span
          className="mt-3 font-medium text-sm text-gray-800"> قدم اول :  موضوع دلخواهتان را انتخاب کنید. </span>
        <div className="mt-4 flex flex-wrap gap-3">

            <CustomRadioForm options={options1} />

        </div>

        <span
          className="mt-3 font-medium text-sm text-gray-800"> قدم دوم :   نوع مشاوره را انتخاب کنید. </span>
        <div className='mt-4 flex flex-wrap gap-3'>
        <CustomRadioForm options={options2} />
        </div>


        <div  className="relative w-full mt-6">
      <button  className="w-full mt-6 yellow-gradient-bg py-4 rounded-lg  flex justify-center items-center">
         <span className="text-sm"> 
          رزرو مشاوره
         </span>
         <ChevronLeft />
      </button>
   </div>

      </div>
    </div>
  )
}

