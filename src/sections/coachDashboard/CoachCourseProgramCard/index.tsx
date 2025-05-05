/* eslint-disable react/no-array-index-key */
/* eslint-disable react-dom/no-missing-button-type */
import type { CoachCourseProgram } from '@/types/Coach';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type CoachCourseCardProps = {
  program: CoachCourseProgram;
};

const CoachCourseCard: React.FC<CoachCourseCardProps> = ({ program }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const router = useRouter();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const startCourseHandler = () => {
    router.push(`/coach-dashboard/coach-course-program/${program._id}`);
  };

  return (
    <div className={`flip-card h-full ${isFlipped ? 'flip-card-active' : ''}`}>
      <div className="flip-card-inner h-full">
        {/* Front Side */}
        <div className="flip-card-front flex flex-col bg-white p-6">
          <div className="grow">
            <h2 className="mb-3 text-xl font-bold text-gray-800">{program.title}</h2>
            <p className="mb-4 line-clamp-3 text-gray-600">{program.description}</p>

            {/* Course Metadata */}
            <div className="mb-4 mt-8 grid grid-cols-2 gap-4">
              {/* Price */}
              <div className="flex items-center justify-center rounded-lg bg-blue-50 p-2">
                <span className="font-medium text-blue-700">
                  {formatPrice(program.amount)}
                  {' '}
                  تومان
                </span>
              </div>

              {/* Subjects Count */}
              <div className="flex items-center justify-center rounded-lg bg-green-50 p-2">

                <span className="font-medium text-green-700">
                  {program.course_subject_count && formatPrice(program.course_subject_count)}
                  {' '}
                  فصل
                </span>
              </div>

              {/* Penalty Info */}
              {program.is_have_penalty && (
                <div className="col-span-2 flex items-center rounded-lg bg-red-50 p-2">
                  <svg className="ml-2 size-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="font-medium text-red-600">
                    جریمه تاخیر:
                    {' '}
                    {formatPrice(program.penalty_fee)}
                    {' '}
                    تومان
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <button
              onClick={handleFlip}
              className="mt-auto flex w-full justify-between rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-700 hover:text-white"
            >
              مشاهده سرفصل‌ها
              <svg className="ml-2 size-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>
            <button
              onClick={startCourseHandler}
              className="mt-auto w-full rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
            >
              شروع دوره
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back flex flex-col bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">سرفصل های دوره</h3>
            <button
              onClick={handleFlip}
              className="p-2 text-gray-500 transition-colors hover:text-gray-700"
            >
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grow overflow-y-auto py-4">
            {program.course_object_titles.map((item: string, index: any) => (
              <div
                key={index}
                className="mb-3 rounded-lg border border-gray-200 bg-gray-50 p-3 transition-colors hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer with back button */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-gray-600">قیمت دوره:</span>
              <span className="font-medium">
                {formatPrice(program.amount)}
                {' '}
                تومان
              </span>
            </div>

            <button
              type="button"
              onClick={handleFlip}
              className="w-full rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300"
            >
              بازگشت به اطلاعات دوره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachCourseCard;
