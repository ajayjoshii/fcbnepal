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
          sm:text-2xl text-xl relative right-30 sm:right-70 sm:top-16 p-16
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
          sm:mt-5 relative sm:right-10 right-21 bottom-10 sm:leading-27 leading-10 sm:bottom-0
          text-3xl sm:text-4xl md:text-8xl
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
          
          max-w-3xl
          text-base sm:text-lg md:text-xl
          leading-relaxed sm:m-5 
          text-white relative sm:left-4 left-6 bottom-4 sm:bottom-0
          
          drop-shadow-[0_2px_3px_rgba(255,255,255,0.7)]
          transition-all duration-500
          hover:scale-[1.02]
        ">
            We are a Christ-centered church family seeking to know God,
            love people, grow together, and share the hope of the Gospel.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row gap-4 sm:mb-25">

            <Link to="/plan-a-visit ">
              <button
                className="
              relative sm:right-45
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
                group relative sm:right-43 
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



      <div className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between gap-12">

          {/* Left Content */}
          <div className="w-1/2">
            <p className="text-orange-500 text-sm font-bold tracking-[0.3em] mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-[#041a4f] text-4xl font-bold leading-[1.05] mb-5">
              Growing in grace, serving
              <br />
              with love.
            </h2>

            <p className="text-[#28456f] text-sm leading-6 max-w-lg mb-5">
              Our church exists to glorify God by making disciples of Jesus Christ
              through biblical teaching, worship, prayer, fellowship, and
              compassionate service.
            </p>

            <Link to="/about/statement-of-faith"

              className="text-orange-500 text-sm font-semibold hover:text-orange-600"
            >
              Discover what we believe →
            </Link>
          </div>

          {/* Right Images */}
          <div className="w-1/2 relative h-64 ">

            <img
              src="/jesus.PNG"
              alt="Jesus worship"
              className="absolute left-0 bottom-18 w-52 h-54 object-cover rounded-2xl"
            />

            <img
              src="/meet.PNG"
              alt="Church community"
              className="relative left-53 top-5  w-52 h-54 object-cover rounded-2xl"
            />

          </div>

        </div>
      </div>


      <div className="w-full bg-[#f7f9fc] py-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 text-xs font-bold tracking-[0.35em] mb-3">
            GET CONNECTED
          </p>

          <h2 className="text-[#041a4f] text-3xl font-bold mb-3">
            There is a place for you here.
          </h2>

          <p className="text-[#496383] text-sm">
            Explore opportunities to learn, serve, fellowship, and grow in faith.
          </p>
        </div>


      </div>

      <div className="w-full bg-[#f7f9fc] py-12">



        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1 */}
          <Link to="/ministries/ladies-bible-studies">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-40 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
              <div className="text-3xl mb-3">🌿</div>

              <h3 className="text-[#041a4f] font-bold text-base mb-2">
                Ladies Bible Studies
              </h3>

              <p className="text-[#496383] text-xs leading-5">
                Grow together through Scripture, prayer, and fellowship.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/ministries/mens-bible-studies">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-40 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
              <div className="text-3xl mb-3">📖</div>

              <h3 className="text-[#041a4f] font-bold text-base mb-2">
                Men's Bible Studies
              </h3>

              <p className="text-[#496383] text-xs leading-5">
                Build faith, friendship, and leadership around God's Word.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/ministries/pastoral-internship">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-40 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
              <div className="text-3xl mb-3">✝️</div>

              <h3 className="text-[#041a4f] font-bold text-base mb-2">
                Pastoral Internship
              </h3>

              <p className="text-[#496383] text-xs leading-5">
                Practical ministry training for future church leaders.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/ministries/sunday-school">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-40 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
              <div className="text-3xl mb-3">🕊️</div>

              <h3 className="text-[#041a4f] font-bold text-base mb-2">
                Sunday School
              </h3>

              <p className="text-[#496383] text-xs leading-5">
                Biblical learning for children, youth, and adults.
              </p>
            </div>
          </Link>

        </div>
      </div>



      <div className="w-full bg-white py-10">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 mb-7 flex justify-between items-end">

          <div>
            <p className="text-orange-600 text-xs font-bold tracking-[0.3em] mb-2">
              LATEST MESSAGES
            </p>

            <h2 className="text-[#041a4f] text-3xl font-bold">
              Sermons that point us to Christ.
            </h2>
          </div>

          <Link to="/sermons"
            className="text-orange-600 text-sm font-bold hover:text-orange-700"
          >
            View all sermons →
          </Link>

        </div>


        {/* Sermon Cards */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

            <img
              src="/1i.PNG"
              alt="Faith That Changes Everything"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">

              <p className="text-orange-600 text-[10px] font-bold tracking-wider mb-2">
                SUNDAY MESSAGE
              </p>

              <h3 className="text-[#041a4f] text-xl font-bold leading-7 mb-1">
                Faith That Changes
                <br />
                Everything
              </h3>

              <p className="text-[#496383] text-xs mb-5">
                Pastor John Smith · Romans 5:1–11
              </p>

              <a
                href="#"
                className="text-orange-600 text-sm font-bold hover:text-orange-700"
              >
                Watch / Listen →
              </a>

            </div>
          </div>


          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

            <img
              src="/2i.PNG"
              alt="Walking by Faith"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">

              <p className="text-orange-600 text-[10px] font-bold tracking-wider mb-2">
                BIBLE TEACHING
              </p>

              <h3 className="text-[#041a4f] text-xl font-bold leading-7 mb-1">
                Walking by Faith
              </h3>

              <p className="text-[#496383] text-xs mb-5">
                Pastor John Smith · Hebrews 11
              </p>

              <a
                href="#"
                className="text-orange-600 text-sm font-bold hover:text-orange-700"
              >
                Watch / Listen →
              </a>

            </div>
          </div>


          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

            <img
              src="/3i.PNG"
              alt="The Hope We Have"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">

              <p className="text-orange-600 text-[10px] font-bold tracking-wider mb-2">
                GOSPEL SERIES
              </p>

              <h3 className="text-[#041a4f] text-xl font-bold leading-7 mb-1">
                The Hope We Have
              </h3>

              <p className="text-[#496383] text-xs mb-5">
                Pastor John Smith · 1 Peter 1:3–9
              </p>

              <Link to="/sermons"
                className="text-orange-600 text-sm font-bold hover:text-orange-700"
              >
                Watch / Listen →
              </Link>

            </div>
          </div>

        </div>

      </div>
    </>

  )
}

export default Hero