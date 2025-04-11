'use client'
import React, { useState, useEffect } from 'react';
import { Clapperboard } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";

// API
import { getCoursesRequest } from '@/API/course';

// Types
import { ICourseTypes } from '@/types/Course';

// components
// import CourseItem from '@/components/CourseItem';
import CourseCardItem from '@/components/Card/CourseCard';
import CourseListFilter from '@/sections/course/CourseListFilter';
import { useProductsStore } from '@/_store/Product';
// import { getProductsRequest } from '@/API/product';
import { isEmpty } from '@/utils/Helpers';

// const NEXT_PUBLIC_SERVER_FILES_URL = process.env.NEXT_PUBLIC_SERVER_FILES_URL || '';
// const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';


interface FilterParams {
  keyword?: string;
  sort?: string;
  category?: string;
  brand?: string;
  price_from?: number;
  price_to?: number;
}


export default function CourseList({ data }: { data: { courses: ICourseTypes[], count: number } }) {

  const [filteredCourses, setFilteredCourses] = useState(data?.courses);
  const [filterParams, setFilterParams] = useState<FilterParams | null>(null);

  const { data: courseDataFromQuery, isLoading, isError, isSuccess } = useQuery({
    queryFn: async () => await getCoursesRequest(filterParams || {}),
    enabled: filterParams !== null,
    queryKey: ["course", filterParams], //Array according to Documentation
  });

  // const product_sortType = useProductsStore((state) => state.product_sortType);

  useEffect(() => {
    console.log({ dataInUseEffect: courseDataFromQuery });
    if (courseDataFromQuery?.data?.courses && isSuccess) {
      setFilteredCourses(courseDataFromQuery?.data?.courses)
    }
  }, [courseDataFromQuery, isSuccess])


  // useEffect(() => {

  //   if (!isEmpty(product_sortType)) {
  //     setFilterParams({ ...filterParams, sort: product_sortType });
  //   }


  // }, [product_sortType])




  const filterHandler = (options) => {

    const queryOptionsReq = {};

    console.log(options)
    setFilterParams(options);
  }




  console.log(data);




  return (
    <>



      <div className='mx-8 justify-between flex mb-8'>

        {/* Filter Modal */}
        <CourseListFilter filterHandler={(d: any) => filterHandler(d)} />

        <div className='flex'>
          <h3 className=' text-right mr-3 text-xl font-bold'> دوره ها</h3>
          <Clapperboard />
        </div>



      </div>
      <div className="flex w-full flex-wrap gap-3 px-4 md:px-0 justify-center md:justify-end">

        {filteredCourses.length === 0 && (
          <div className='w-full justify-center items-center text-black text-lg font-semibold text-center py-12'>
            موردی یافت نشد
          </div>
        )}

        {filteredCourses && filteredCourses.map((course) => (
          <CourseCardItem data={course} key={course._id} isLikedByUser />
        ))}


      </div>
    </>
  )
}
