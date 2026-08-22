import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="bg-[url('/churchimg.jpg')] bg-cover bg-center h-screen items-center flex flex-col justify-center gap-4">
      <h1 className="text-5xl text-green-400 font-bold pt-20 px-20 py-5">Welcome Home</h1>
      <p className='text-blue-600 text-3xl font-bold px-10'>A place to Belong <span>A Faith to Live</span> </p>

      <p className='text-gray-800 text-justify text-xl py-2 px-3'>We are a Christ-centered church family seeking to know God, love people, grow together, and share the hope of the Gospel.</p>


      <div className='flex gap-2 mx-8 my-4 '>

        <Link to="/plan-a-visit">
          <button className='bg-green-400 hover:scale-105 transition duration-700 p-3 font-bold text-white'>Plan Your Visit</button>

        </Link>

        <Link to="/sermons">
          <button className='border border-green-500 hover:scale-105 duration-700 transition p-2 font-bold text-green-700'>Watch Sermons</button>


        </Link>
      </div>

    </div>
  )
}

export default Hero