import React from 'react'
import { ChevronsLeft, ClipboardList } from 'lucide-react';
// import CourseItem from '@/components/CourseItem';
// componet
import CourseCardItem from '@/components/Card/CourseCard';

export default function CoursesCardSection() {
return (
<div className='container mx-auto'>
    {/* Header */}
    <div className='flex justify-between w-full pb-8 px-4'>

        <button
            className="bg-transparent text-black font-medium hover:text-white py-2 px-4  rounded-md inline-flex items-center">
            <ChevronsLeft className='mr-2' />
            مشاهده همه
        </button>
        <div className='py-2 inline-flex items-center  text-lg text-black font-semibold'>
        
           دوره های آموزشی 
          <ClipboardList className='ml-3' />
        </div>
    </div>
    <div className="flex w-full flex-wrap justify-center items-center px-5 md:px-0 gap-5">
      <div className='w-full md:w-[30%] '>
        <CourseCardItem  speaker="مریم صفدری" category="هنری" subtitle="تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم." imageSrc={`https://s3.eseminar.tv/upload/slideshow/1738428254-slideshow.jpgg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
      </div>

      <div className='w-full md:w-[30%] '>
        <CourseCardItem  speaker="مریم صفدری" category="هنری" subtitle="تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم." imageSrc={`https://s3.eseminar.tv/upload/slideshow/1738428254-slideshow.jpgg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
      </div>


      <div className='w-full md:w-[30%] '>
        <CourseCardItem  speaker="مریم صفدری" category="هنری" subtitle="تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم." imageSrc={`https://s3.eseminar.tv/upload/slideshow/1738428254-slideshow.jpgg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
      </div>


      <div className='w-full md:w-[30%] '>
        <CourseCardItem  speaker="مریم صفدری" category="هنری" subtitle="تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم." imageSrc={`https://s3.eseminar.tv/upload/slideshow/1738428254-slideshow.jpgg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
      </div>

      <div className='w-full md:w-[30%] '>
        <CourseCardItem  speaker="مریم صفدری" category="هنری" subtitle="تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم." imageSrc={`https://s3.eseminar.tv/upload/slideshow/1738428254-slideshow.jpgg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
      </div>

      <div className='w-full md:w-[30%] '>
        <CourseCardItem  speaker="مریم صفدری" category="هنری" subtitle="تجربه رشد  فروش در 4 سال، با شما راهکارهای کاربردی که رشد تیم فروش را به همراه دارد را بررسی می‌کنیم." imageSrc={`https://s3.eseminar.tv/upload/slideshow/1738428254-slideshow.jpgg`} title=" تغییر و تطبیق صدا با هوش مصنوعی" link={undefined}  />
      </div>
    
    </div>
    
</div>
)
}
