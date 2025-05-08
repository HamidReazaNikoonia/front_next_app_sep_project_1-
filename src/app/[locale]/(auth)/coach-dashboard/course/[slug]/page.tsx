'use client'
import CourseLearningSection from '@/sections/coachDashboard/CourseLearningSection'
import React, {use} from 'react'

export default function SpecificCoachCourseProgram({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = use(params); 

  return (
    <div dir="rtl" className="border-1 min-h-svh bg-slate-100 px-1 py-12 md:px-4">
      <div className='w-full flex justify-center items-center'>
        <CourseLearningSection slug={slug} />
      </div>
    </div>
  )
}
