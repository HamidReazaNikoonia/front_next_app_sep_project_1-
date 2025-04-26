/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import useAuth from '@/hooks/useAuth';

import { useState } from 'react';

// API
import CoachForm from '@/sections/coachDashboard/CoachForm';
import Stepper from '@/sections/coachDashboard/Stepper';

export default function CoachDashboardPage() {
  const [steps, setsteps] = useState(0);

  const { user } = useAuth();

  // const [profileDataState, setProfileData] = useState({
  //   courseCount: 0,
  //   orderCount: 0,
  //   favorites: 0
  // })

  // const { data: profileData, isLoading: profileIsLoading, isError: profileIsError, error: profileError, isSuccess: profileIsSuccess } = useQuery({
  //   // @ts-expect-error
  //   queryKey: ['profile', user?.id],
  //   // @ts-expect-error
  //   queryFn: user ? () => getUserProfileRequest({ userId: user.id }) : undefined,
  //   enabled: !!user  // Prevents query execution when user is null
  // })

  // useEffect(() => {

  //   if (profileData && profileData?.profile) {

  //     setProfileData({
  //       courseCount: Array.isArray(profileData.courses) ? profileData.courses.length : 0,
  //       orderCount: Array.isArray(profileData.orders) ? profileData.orders.length : 0,
  //       favorites: 0
  //     })
  //   }
  // }, [profileIsSuccess, profileData])

  // Show a loading spinner or nothing while checking authentication
  // if (profileIsLoading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  return (
    <div dir="rtl" className="border-1 bg-slate-100 px-1 py-12 md:px-4">
      {/* Steps 0 ==> Coach Information Complete */}
      {steps === 0 && (
        <div className="flex w-full flex-col">
          <Stepper activeStep={0} />
          <CoachForm />
        </div>
      )}

      sssss
      {' '}
      {user?.role && user.role}
    </div>
  );
}
