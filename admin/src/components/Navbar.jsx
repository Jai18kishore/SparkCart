import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center px-[4%] justify-between'>
      <img src={assets.logo} alt="logo" />
      <button onClick={()=>setToken('')} className='bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>LOGOUT</button>
    </div>
  )
}

export default Navbar
