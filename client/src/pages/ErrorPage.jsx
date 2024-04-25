import React from 'react'
import Navbar from '../components/Navbar'

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className='flex align-middle justify-center w-100 font-extrabold text-2xl'>
        Page Not Fount
      </div>
    </div>
  )
}

export default ErrorPage
