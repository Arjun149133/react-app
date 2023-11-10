import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <>
      <div className=' h-screen grid place-items-center space-y-1'>
      <h1 className=' text-4xl font-bold'>Welcome</h1>
      <div className=' flex space-x-7'>
      <Link to='/login' className=" link link-hover link-primary capitalize btn btn-primary text-white hover:text-white">Login</Link>
      <Link to='/register' className=" link link-hover link-primary capitalize btn btn-primary text-white hover:text-white">Register</Link>

      </div>
      </div>
    </>
  )
}

export default Landing