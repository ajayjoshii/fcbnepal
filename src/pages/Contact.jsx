import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="mx-auto px-6 py-20 sm:px-8 lg:px-12 bg-[#041a4f]">
      <div className="flex justify-center flex-col items-center min-w-screen  ">
        <p className="mb-4 text-3xl text-yellow-400 font-bold uppercase tracking-widest">
          Plan Your Visit


        </p>

        <h1 className="text-xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
          We would love to worship with you.


        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-white">
          Whether you're exploring faith or looking for a church family, you are welcome here.

        </p>

        <div className='flex gap-4 m-8'>

          <Link to="/plan-a-visit">

            <button className="bg-yellow-400 px-7 py-3 rounded-xl text-white font-bold hover:scale-105 transition duration-700 items-center">Contact Us</button>

          </Link>

          <Link to="/about/our-leaders">
            <button className="text-white border border-gray-400 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition duration-700 flex gap-2 items-center">Meet Our Leaders</button>
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Contact