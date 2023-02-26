import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

export default function EventList() {
  return (
    <div>
      <div className='text-center text-6xl font-base text-white'>Events</div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 space-x-2" >

        {/* card */}
        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-xl p-2 mx-1 my-3">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img className="h-40 rounded-2xl w-full object-cover" alt='' src="https://i0.wp.com/phuketmeetingconference.com/news/wp-content/uploads/2019/12/Main-Pic_Blog_Temp.jpg?resize=1180%2C705&ssl=1" />
          </div>
          <div className="mt-4 pl-2 mb-2 flex text-xl ">
            Eco Meet Event Title
          </div>
          <div className='flex flex-1'>
            <IoLocationOutline className='w-6 h-6 text-black' />
            ABC Enclave, 224 Street.
          </div>
          <div className='grid place-items-center'>
            <button type="submit" className="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Know Event Detsils</button>
          </div>
        </div>

      </div>
    </div>
  )
}
