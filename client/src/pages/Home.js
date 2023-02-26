import React from 'react'
import HeroHomeImg from "../assets/hero.svg"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center mt-4">

        <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
          <div className='text-white'>
            <h1 className='text-3xl md:text-6xl'>About Us</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>We have created a website that enables users to successfully give and take their unwanted things and participate in a variety of events to raise awareness or foster community. We want to use this platform to unite individuals around a similar goal and contribute to the world's environmental improvement.</p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HeroHomeImg} alt="img" width="350" height="350" />
          </div>
        </div>

        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center bg-parallex1 text-secondary">
          <h1 className="text-5xl font-semibold mt-20 mb-10">
            Give your used items
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
              <li className="list-disc py-1">Plant a tree.</li>
              <li className="list-disc py-1">Conserve water.</li>
              <li className="list-disc py-1">Avoid plastic-wrapped fruit and veg.</li>
              <li className="list-disc py-1">Invest in a wooden/bamboo toothbrush.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
