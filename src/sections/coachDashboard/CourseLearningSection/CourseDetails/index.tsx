'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { filterPriceNumber, truncateDescription } from '@/utils/Helpers';
import { AlertCircle, Book, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';

// Define the type for our course program
type CoachCourseProgram = {
  _id: string;
  amount: number;
  is_have_penalty: boolean;
  penalty_fee: number;
  title: string;
  description: string;
  course_subject_count: number;
  createdAt: string;
  updatedAt: string;
  course_object_titles: string[];
};

type CourseDetailsProps = {
  courseData: CoachCourseProgram;
};

export default function CourseDetails({ courseData }: CourseDetailsProps) {
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleEnroll = () => {
    // This would typically make an API call to enroll the user
    setIsEnrolled(true);
  };

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main course information */}
        <div className="md:col-span-2">
          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
            <CardHeader className="border-b border-gray-100 pb-4">
              <div className="space-y-2">
                <CardTitle className="text-2xl font-medium text-gray-800">{courseData.title}</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Calendar className="ml-1.5 size-3.5" />
                  <span>
                    تاریخ ایجاد:
                    {` `}
                    {formatDate(courseData.createdAt)}
                  </span>
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-base font-medium text-gray-700">توضیحات دوره</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{truncateDescription(courseData.description)}</p>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base font-medium text-gray-700">سرفصل‌های دوره</h3>
                    <Badge
                      variant="outline"
                      className="rounded-full border-gray-200 bg-gray-50 px-3 text-xs font-normal text-gray-600"
                    >
                      {courseData.course_subject_count}
                      {' '}
                      سرفصل
                    </Badge>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2 border-0">
                    {courseData.course_object_titles.map(title => (
                      <AccordionItem
                        key={title}
                        value={`item-${title}`}
                        className="overflow-hidden rounded-lg border border-gray-100"
                      >
                        <AccordionTrigger className="px-4 py-3 transition-colors hover:bg-gray-50">
                          <div className="flex items-center">
                            <Book className="mr-2 size-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-700">{title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 text-sm text-gray-500">
                          جزئیات این سرفصل  بعد از پرداخت اضافه خواهد شد.
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing and enrollment sidebar */}
        <div className="md:col-span-1">
          <Card className="sticky top-4 rounded-xl border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium text-gray-800">ثبت‌نام در دوره</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">هزینه دوره:</span>
                <span className="font-medium text-gray-900">
                  {filterPriceNumber(courseData.amount)}
                  {' '}
                  تومان
                </span>
              </div>

              <Separator className="bg-gray-100" />

              {courseData.is_have_penalty && (
                <div className="flex items-start gap-2.5 py-2">
                  <AlertCircle className="mt-0.5 size-4 shrink-0 text-amber-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">جریمه انصراف</p>
                    <p className="mt-1 text-xs text-gray-500">
                      در صورت انصراف از دوره، جریمه‌ای معادل
                      {' '}
                      {filterPriceNumber(courseData.penalty_fee)}
                      {' '}
                      تومان
                      اعمال خواهد شد.
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                {isEnrolled
                  ? (
                      <div className="flex items-center gap-2 rounded-lg border border-green-100 bg-green-50 p-3">
                        <CheckCircle className="size-5 text-green-500" />
                        <p className="text-sm text-green-700">شما با موفقیت در این دوره ثبت‌نام کرده‌اید!</p>
                      </div>
                    )
                  : (
                      <Button
                        className="h-11 w-full rounded-lg bg-gray-900 py-2 text-white transition-colors hover:bg-gray-800"
                        onClick={handleEnroll}
                      >
                        ثبت‌نام در دوره
                      </Button>
                    )}
              </div>
            </CardContent>

            <CardFooter className="flex justify-center border-t border-gray-100 py-3 text-xs text-gray-400">
              <p>
                آخرین بروزرسانی:
                {formatDate(courseData.updatedAt)}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
