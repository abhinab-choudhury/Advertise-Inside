import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function ErrorPage() {
  return (
    <div>
      <section className='flex laptop:mt-[15%] tablet:mt-[60%] mobile:mt-[50%] laptop:w-[100%] mobile:mx-10 mobile:w-fit justify-center'>
        <div className='w-fit font-extrabold text-3xl bg-gray-300 h-fit laptop:p-20 mobile:p-4 mobile:w-fit mobile:rounded-[10px] laptop:rounded-[20px]'>
          <div className=' desktop:text-[4.2rem] laptop:text-[3.8rem] tablet:text-[3.8rem]'>
            Page Not Found
            <div className='font-normal leading-3 mt-10 mobile:text-base'>
              Oops! Looks like you've gotten lost. The page you're looking for may have been moved or removed.<br />Link to
              <Link to="/" className="text-blue-600 font-thin hover:underline"> Home Page</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
