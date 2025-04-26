/* eslint-disable tailwindcss/no-custom-classname */
import clsx from 'clsx';
import React from 'react';

export default function Stepper({activeStep = 0}) {
  return (
    <div className="w-full">
      {/* Steper */}
      <div className="container mx-auto">
        <ol className="w-full items-center justify-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
          <li className={clsx('flex items-center space-x-2.5 dark:text-blue-500 rtl:space-x-reverse', { 'text-blue-600' : activeStep === 0})}>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-blue-600 dark:border-blue-500">
              1
            </span>
            <span>
              <h3 className="font-sm leading-8">اطلاعات مربی</h3>
              <p className="text-xs">لطفا اطلاعات را کامل کنید</p>
            </span>
          </li>
          <li className="flex items-center space-x-2.5 text-gray-500 dark:text-gray-400 rtl:space-x-reverse">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gray-500 dark:border-gray-400">
              2
            </span>
            <span>
              <h3 className="font-medium leading-8">در خواست سطح</h3>
              <p className="text-xs">شما میتوانید سطح  خود را بالا ببرید</p>
            </span>
          </li>
          <li className="flex items-center space-x-2.5 text-gray-500 dark:text-gray-400 rtl:space-x-reverse">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gray-500 dark:border-gray-400">
              3
            </span>
            <span>
              <h3 className="font-medium leading-8">دریافت گواهینامه</h3>
              <p className="text-xs">دریافت گواهینامه معتبر</p>
            </span>
          </li>
        </ol>

      </div>
    </div>
  );
}
