import React from 'react'
import HeroHomeImg from "../assets/hero.svg"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center mt-4">

        <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
          <div className='text-white'>
            <h1 className='text-3xl md:text-6xl'>About Us</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HeroHomeImg} alt="img" width="350" height="350" />
          </div>
        </div>

        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center bg-parallex1 text-secondary">
          <h1 className="text-5xl font-semibold mt-20 mb-10">
            Buy and Sell Recycled goods
          </h1>

          <span className="text-center font-bold text-xl my-20">
            <p className=''>Save Environment</p>

            <hr className="h-[0.15rem] w-96 my-4 bg-white" />

            <p className=''>Join events happening in your city</p>


            <hr className="h-[0.15rem] w-96 my-4 bg-white" />

            <p className=''>Create Events</p>

          </span>
        </section>

        <section className="p-20 space-y-8">
          <div className='text-white'>
            <h1 className='text-5xl'>Tips to save evnronment:</h1>
            <ul className="text-xl ml-5 py-4">
              <li className="list-disc py-1">Reduce, reuse, and recycle.</li>
              <li className="list-disc py-1">Bring your own reusable cup.</li>
              <li className="list-disc py-1">Avoid products with microbeads.</li>
              <li className="list-disc py-1">Invest in a reusable water bottle.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
