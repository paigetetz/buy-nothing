import React from 'react'

export default function ItemList() {
  return (
    <div>
      <div className='text-center text-6xl font-base text-white'>Items</div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 space-x-2" >

        {/* card */}
        <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-xl p-2 mx-1 my-3">
          <div className="overflow-x-hidden rounded-2xl relative">
            <img className="h-40 rounded-2xl w-full object-cover" alt='' src="https://m.media-amazon.com/images/I/31N0jBFHQ5L._AC._SR180,230.jpg" />
          </div>
          <div className="mt-4 pl-2 mb-2 flex text-xl ">
            Bottle
          </div>
          <div className='grid place-items-center'>
            <button type="submit" className="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact owner</button>
          </div>
        </div>

      </div>
    </div>
  )
}
