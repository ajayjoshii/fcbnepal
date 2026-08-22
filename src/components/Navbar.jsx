import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../constants/Navlinks'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  return (
    <nav className='bg-[#041a4f] text-white fixed w-full h-17'>
      <div className='flex justify-between p-4'>
        <NavLink to="/" className="flex gap-2 hover:scale-105 duration-700 ease-in-out items-center ml-6">
          <img src="/logos.jpg" alt="logo" className='h-10 w-10' />

          <h1 className='font-bold text-center text-sm'>Anugraha <br /> Church</h1>
        </NavLink>
        <button onClick={() => setOpen(!open)} className='font-bold md:hidden bg-blue-400 p-2 hover:scale-105 transition duration-500 ease-in-out m-2'>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>


        <ul className='md:flex hidden gap-6 mr-80 font-semibold'>

          {navLinks.map((link, index) => (

            <li key={index} className='relative hover:scale-105 duration-700'>

              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setDropdown(dropdown === link.name ? null : link.name)
                    }
                    className='cursor-pointer transition'
                  >
                    {link.name} ▼
                  </button>

                  {dropdown === link.name && (
                    <ul className='absolute top-11 left-0 bg-white text-black shadow-lg rounded w-48 p-2 z-50'>

                      {link.submenu.map((item, index) => (
                        <li
                          key={index}
                          className='p-2 hover:bg-gray-200 rounded'
                        >
                          <Link
                            to={item.path}
                            onClick={() => setDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  )}
                </>
              ) : (
                <Link to={link.path}>
                  {link.name}
                </Link>
              )}

            </li>

          ))}

        </ul>

      </div>

      {
        open &&
        <ul className='space-y-6 p-4 md:hidden'>
          {navLinks.map((link, index) => (
            <li key={index} className=''>
              <Link to={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
            </li>
          )
          )}
        </ul>
      }



      <Link to="/plan-a-visit" className='relative left-270 bottom-14 text-center'>
        <p className='text-sm rounded text-[#041a4f] font-bold bg-white hover:scale-105 duration-700 w-30 p-2'>Plan a Visit</p>

      </Link>
    </nav>
  )
}

export default Navbar