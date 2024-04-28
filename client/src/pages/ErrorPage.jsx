import React from 'react'
import Navbar from '../components/Navbar'

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <section className='flex laptop:mt-[20%] tablet:mt-[60%] mobile:mt-[50%] w-[100vw] justify-center'>
        <div className='w-fit font-extrabold text-3xl bg-gray-300 h-[40vh] laptop:p-20 mobile:p-4 mobile:w-fit mobile:rounded-[10px] laptop:rounded-[20px]'>
          <div className=' desktop:text-[4.2rem] laptop:text-[3.8rem] tablet:text-[3.8rem]'>
            Page Not Found
            <div className='font-normal leading-3 mobile:text-xl mt-10'>Oops! Looks like you've gotten lost. The page you're looking for may have been moved or removed.</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
