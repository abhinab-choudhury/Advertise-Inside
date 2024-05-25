import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import ContactUsForm from '../components/ContactUsForm'

function Advertise() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className='flex laptop:flex-row tablet:flex-col mobile:flex-col justify-evenly relative top-20'>
        <div className='flex flex-col justify-center items-center m-8 laptop:w-[50%]'>
          <h1 className='text-3xl font-bold flex mr-auto py-2'>Plans</h1>
          <div className='mr-auto text-lg'>Reach Millions. Target Precisely.<br /> <strong className='text-bold'>Advertise Insight:</strong> Your Gateway to Effective Advertising in India.</div>
          <div className='border-2 border-gray-500 w-[100%] mx-auto my-4'></div>
          <div className='w-[100%] flex justify-evenly mb-10 gap-10 laptop:overflow-hidden mobile:overflow-scroll'>
            <Card price={5000} nfb={500} plan_type={"Standard plan"} />
            <Card price={8500} nfb={1000} plan_type={"Pro plan"} />
          </div>
        </div>
        <div className='border-2 border-black mx-8 mobile:mb-8 tablet:mb-8'></div>
        <div className='laptop:w-[50 tablet:w-[50%] mobile:w-[100%] p-[55px] backdrop-blur-[10px] z-[50px] mx-auto font-["Inter"] flex flex-col justify-center items-center font-extrabold font-xl'>
          <ContactUsForm title="Contact Us" />
          {/* Use YAP for validation and nodemailer for emailing */}
        </div>
      </section >
      <section className='mt-32'>
        <Footer />
      </section>
    </>
  )
}

export default Advertise