'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { CustomRadioForm } from '@/components/CouchAndCosultSectionWidget';

import { ChevronLeft, Pencil } from 'lucide-react';
import ReserveCalendar from '@/sections/consult/ReserveCalendar';



type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

// export async function generateMetadata(props: IPortfolioProps) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'Portfolio',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }


const consultMockData = [
  {
    _id: '1',
    first_name: 'John',
    last_name: 'Doe',
    avatar_image: 'https://randomuser.me/api/portraits',
    score: 4,

  }
]

const options1 = [
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


const options2 = [
  { value: "HOZORI", label: "مشاوره حضوری" },
  { value: "OFFLINE", label: "مشاوره آنلاین" },

];

// const fetchRepo = async () => {
//   const res = await fetch('http://localhost:9000/v1/course', {
//     next: { revalidate: 60 }, // Enables ISR (Incremental Static Regeneration)
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// };


export default function consultPgae(props: IPortfolioProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  // const coursesData = await fetchRepo();
  // console.log({coursesData: coursesData.data.courses})

  // UI STATE
  const [ShowConsultCategory, setShowConsultCategory] = useState(false);
  const [ShowConsultType, setShowConsultType] = useState(false);



  const searchParams = useSearchParams();
  const consultCategoryQueryParam = searchParams.get("consult_category");
  const consultTypeQueryParam = searchParams.get("consult_type");


  const [selectedConsultCategory, setSelectedConsultCategory] = useState(consultCategoryQueryParam || options1[0].value);
  const [selectedConsultType, setSelectedConsultType] = useState(consultTypeQueryParam || options2[0].value);

  const router = useRouter();
 


  const handleConsultCategoryChange = (value) => {
    setSelectedConsultCategory(value);  // Update parent state

  };

  const handleConsultTypeChange = (value) => {
    setSelectedConsultType(value);  // Update parent state

  };

  const reserveSubmitHandler = () => {
    console.log('selectedConsultCategory', selectedConsultCategory);
    console.log('selectedConsultType', selectedConsultType);
    router.push(`/consult?consult_category=${selectedConsultCategory}&consult_type=${selectedConsultType}`);
  }

  const courseTypeMap: {
    HOZORI: string;
    OFFLINE: string;
  } = {
    HOZORI: 'حضوری',
    OFFLINE: 'آنلاین'
  }
  

  return (
    <div className='overflow-hidden primary-gradient-bg text-black min-h-screen'>



      <div className=' container mx-auto mb-24 mt-12 rounded-2xl shadow-xl bg-white py-4 px-8'>

        {/* SELECT Consult Category and Consult Type Section */}
        <div className='pb-2 px-8 w-full flex flex-col md:flex-row justify-end items-center'>

          {/* Rigth Section */}
          <div dir='rtl' className="bg-inherit flex-col space-y-2 flex rounded-xl p-6">
            <div className='flex flex-row gap-3 items-center'>
            <span
              className="mt-3 font-medium text-lg text-gray-800"> شما مشاوره برای <span className='font-bold text-green-700'>
                {selectedConsultCategory}
              </span> انتخاب کردید</span> 
              <span onClick={() => setShowConsultCategory(true)} className='text-xs text-blue-700 cursor-pointer hover:underline'  >     ( تغییر موضوع ) <Pencil size={16} className=' inline' /></span>
            </div>

            {ShowConsultCategory && (
                <div className="mt-4 border-b pb-7 flex  flex-wrap gap-3 ">

                <CustomRadioForm
                  options={options1}
                  selectedOption={selectedConsultCategory}
                  onChange={handleConsultCategoryChange}  // Pass handler to child
                />
  
              </div>
            )}
            
            <div className='flex flex-row gap-3 items-center'>
            <span
              className="mt-5 font-medium text-lg text-gray-800">  شما مشاوره <span className='font-bold text-green-700'>
                {courseTypeMap[selectedConsultType]}
                </span> را انتخاب کردید  </span>

                <span onClick={() => setShowConsultType(true)} className='text-xs mt-2 text-blue-700 cursor-pointer hover:underline'  >     ( تغییر ) <Pencil size={16} className=' inline' /></span>

            </div>
            
            {ShowConsultType && (
              <div className='mt-4 flex flex-wrap gap-3'>
              <CustomRadioForm
                options={options2}
                selectedOption={selectedConsultType}
                onChange={handleConsultTypeChange}  // Pass handler to child
              />
            </div>
            )}
            


            {/* <div className="relative w-full mt-6">
              <button onClick={reserveSubmitHandler} className="w-full mt-6 yellow-gradient-bg py-4 rounded-lg  flex justify-center items-center">
                <span className="text-sm">
                  رزرو مشاوره
                </span>
                <ChevronLeft />
              </button>
            </div> */}

          </div>
        </div>



        {/* Select Time/Date Section */}
        <div className='py-8 px-8 w-full flex flex-col border-t-2'>
          <h2 className='text-lg text-center'>
            لطفا تاریخ و ساعت مورد نظر خود را انتخاب کنید
             </h2>

            {/* Calendar Wrapper */}
            <div className='py-14'>
            <ReserveCalendar />
            </div>
        </div>
      </div>
    </div>
  );
};
