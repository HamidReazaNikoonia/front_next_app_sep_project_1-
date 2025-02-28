'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';

import momentJalaali from "moment-jalaali";
import { Suspense, useEffect, useState } from 'react';
import { CustomRadioForm } from '@/components/CouchAndCosultSectionWidget';

import { ChevronLeft, Pencil, BadgeCheck } from 'lucide-react';
import ReserveCalendar from '@/sections/consult/ReserveCalendar';

import useResponsiveEvent from '@/hooks/useResponsiveEvent';

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


const findLabel = (value) => {
  const option = options1.find((option) => option.value === value);
  return option.label;
}


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


export default function Page (props: IPortfolioProps) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConsultPgae {...props} />
    </Suspense>
  );
}

function ConsultPgae(props: IPortfolioProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  // const coursesData = await fetchRepo();
  // console.log({coursesData: coursesData.data.courses})


  const searchParams = useSearchParams();
  const consultCategoryQueryParam = searchParams.get("consult_category");
  const consultTypeQueryParam = searchParams.get("consult_type");

// UI STATE
  const [ShowConsultCategory, setShowConsultCategory] = useState(false);
  const [ShowConsultType, setShowConsultType] = useState(false);



  


  const [selectedConsultCategory, setSelectedConsultCategory] = useState(consultCategoryQueryParam || options1[0].value);
  const [selectedConsultType, setSelectedConsultType] = useState(consultTypeQueryParam || options2[0].value);


  const isMobileScreen = useResponsiveEvent(768, 200);


  // Reservation time state
  const [selectedDateState, setSelectedDateState] = useState(
    momentJalaali().locale("fa").format("jYYYY/jM/jD")
  );
  const [timeSlotItem, settimeSlotItem] = useState(null);

  const router = useRouter();


  useEffect(() => {
    if (!consultCategoryQueryParam) {
      setShowConsultCategory(true);
    }

    if (!consultTypeQueryParam) {
      setShowConsultType(true)
    }
  },[])
  
 


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


  const dateChangeHandler = (date) => {
    setSelectedDateState(date);
    console.log('date', date);
  }

  const timeSlotChangeHandler = (slot) => {
    settimeSlotItem(slot);
    console.log('slot', slot);
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



      <div className='  md:container md:mx-auto mb-24 mt-12 rounded-2xl shadow-xl bg-white py-4 px-0 md:px-8'>

        {/* SELECT Consult Category and Consult Type Section */}
        <div className='pb-2 px-0 md:px-8 w-full flex flex-col md:flex-row justify-end items-center'>

          {/* Rigth Section */}
          <div dir='rtl' className="bg-inherit flex-col space-y-2 flex rounded-xl p-6 ">
            <div className='flex flex-row gap-1 md:gap-3 items-center'>
            <span
              className="mt-3 font-medium text-sm md:text-lg text-gray-800 leading-6"> شما مشاوره برای <span className='font-bold text-green-700'>
                {selectedConsultCategory && findLabel(selectedConsultCategory)}
              </span> انتخاب کردید</span> 
              {consultCategoryQueryParam && <span onClick={() => setShowConsultCategory(true)} className='text-[11px] text-blue-700 cursor-pointer flex-shrink-0 hover:underline'  >     ( تغییر موضوع ) <Pencil size={isMobileScreen ? 14 : 16} className=' inline' /></span>}
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
              className="mt-5 font-medium text-sm md:text-lg text-gray-800">  شما مشاوره <span className='font-bold text-green-700'>
                {courseTypeMap[selectedConsultType]}
                </span> را انتخاب کردید  </span>

                {consultTypeQueryParam && <span onClick={() => setShowConsultType(true)} className='text-[11px] text-blue-700 cursor-pointer hover:underline'  >     ( تغییر ) <Pencil size={isMobileScreen ? 14 : 16} className=' inline' /></span>}

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
        <div className='py-8 px-8 w-full flex flex-col border-t-2 border-b-2'>
          <h2 className='text-lg text-center'>
            لطفا تاریخ و ساعت مورد نظر خود را انتخاب کنید
             </h2>

            {/* Calendar Wrapper */}
            <div className='py-14'>
            <ReserveCalendar timeSlotChangeHandler={timeSlotChangeHandler}  dateChangeHandler={dateChangeHandler} />
            </div>
        </div>


        {/* Payment And Information Section */}
        <div className='w-full flex py-8 px-8 flex-col'>
          {/* Header Information */}
          <div className='text-lg text-center'>
            هزینه و اطلاعات پرداخت برای مشاوره
          </div>

          <div dir='rtl' className='text-sm leading-7 text-gray-800 mt-12 p-4 border-2 border-dashed border-gray-400 rounded-lg'>
            هزینه مشاوره برای هر جلسه با بهترین اساتید و مشاوران شامل  هزار تومان میباشد که شما میبایست این 
            مبلغ را به صورت اینترنتی پرداخت کنید, شما بعد از کامل کردن اطلاعات این صفحه که شامل نوع مشاوره و زمان برگذاری مشاوره میباشد
            با کلیک کردن بر روی دکمه ثبت مشاوره به صفحه ی پرداخت بانک منتقل خواهید شد و بعد از
           پرداخت , در صورت تایید مشاور شما برای شما اطلاع رسانی خواهد شد.
          </div>



          {/* Button */}
          <div className="relative w-full mt-6">
            <button onClick={reserveSubmitHandler} className="w-full mt-6 yellow-gradient-bg py-4 rounded-lg  flex justify-center items-center">
              <span className="text-sm">
                 ثبت مشاوره
              </span>
              <BadgeCheck className='ml-2' />
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};
