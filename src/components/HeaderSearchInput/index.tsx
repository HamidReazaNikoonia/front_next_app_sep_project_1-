import React from 'react'
import { Input } from '@/components/ui/input'
import Button from '../LoadingButton'
import { Search } from 'lucide-react';

export default function HeaderSearchInput() {
  return (
    <div dir='rtl' className=' relative '>
        <div className='relative mt-4 text-black text-lg  rounded-lg'>
          <div className='flex w-full items-center space-x-2'>
          <Input placeholder='جستجو کنید' className='w-full px-7 py-8 shadow-lg rounded-lg bg-white' />
          <Button className='hidden md:flex flex-row relative right-[-75px] text-sm  bg-green-600' type="submit">
          <Search />
            </Button>
          </div>
          
        </div>
    </div>
  )
}
