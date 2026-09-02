import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[url('/faith.jpeg')] bg-cover bg-center">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative top-10  z-10 text-left flex flex-col items-center px-6 sm:px-10 lg:px-20 max-w-5xl">

        {/* Heading */}
        <h1 className="
          text-2xl relative right-70 sm:top-16 p-16
          font-semibold
          tracking-tight
          text-orange-400
          text-left
          drop-shadow-[0_3px_5px_rgba(255,255,255,0.5)]
          transition-all duration-700
          hover:scale-105
          cursor-default
        ">
          Welcome Home
        </h1>

        {/* Subtitle */}
        <p className="
          mt-5 relative right-10
          text-2xl sm:text-4xl md:text-8xl
          font-bold
          text-white
          tracking-wide
          transition-all duration-500
          
        ">
          A place to <br /> <span className='text-yellow-300'>belong.</span>  <br />
          <span className="italic">
            A faith to Live
          </span>
        </p>

        {/* Description */}
        <p className="
          mt-6
          max-w-3xl
          text-base sm:text-lg md:text-xl
          leading-relaxed
          text-white relative left-4
          
          drop-shadow-[0_2px_3px_rgba(255,255,255,0.7)]
          transition-all duration-500
          hover:scale-[1.02]
        ">
          We are a Christ-centered church family seeking to know God,
          love people, grow together, and share the hope of the Gospel.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 m-15">

          <Link to="/plan-a-visit ">
            <button
              className="
              relative right-45
                group
                px-7 py-3.5 
                rounded-full
                bg-orange-400
                text-white
                font-bold
                shadow-lg
                shadow-green-500/30
                transition-all
                duration-500
                hover:scale-103
                active:scale-95
              "
            >
              Plan Your Visit
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>

          <Link to="/sermons">
            <button
              className="
                group relative right-43
                px-7 py-3.5
                rounded-full
                border-2
                border-green-600
                text-white
                font-bold
                backdrop-blur-sm
                transition-all
                duration-500
                hover:scale-103
                hover:text-white
                active:scale-95
              "
            >
              Watch Sermons
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>

        </div>

      

      </div>
    </section>
      
        <div className="flex text-white gap-50 justify-around items-center bg-orange-400 w-full p-9">

          <div className='text-white flex flex-col gap-2'>
            <h1>Sunday Worship</h1>
            <b className='text-2xl'>10:30 AM</b>
          </div>
          <div className='text-white flex flex-col gap-2'>

            <h1>Bible Study</h1>
            <b className='text-2xl'>Wednesday · 7:00 PM</b>
          </div>
          <div className='text-white flex flex-col gap-2'> <h1>Everyone Welcome</h1>
            <b className='text-2xl'>Come as you are</b></div>
        </div>
    </>

  )
}

export default Hero