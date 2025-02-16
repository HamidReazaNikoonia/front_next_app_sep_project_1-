import React from 'react'
import { ChevronsLeft, ClipboardList } from 'lucide-react';
import ServiceSwiper from '@/components/swiper/ServiceSwiper';

export default function ProductCardSection() {
return (
<>
    {/* Header */}
    <div className='flex justify-between w-full pb-2 px-4 md:px-20'>

        <button
            className="bg-transparent text-white font-medium hover:text-white py-2 px-4 inline-flex items-center">
            <ChevronsLeft className='mr-2' />
            مشاهده همه
        </button>
        <div className='py-2 inline-flex items-center  text-lg text-white font-semibold'>
        
           محصولات فرهنگی 
          <ClipboardList className='ml-3' />
        </div>
    </div>
    <ServiceSwiper />
</>
)
}
