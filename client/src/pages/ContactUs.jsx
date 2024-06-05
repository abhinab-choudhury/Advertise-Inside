import React from 'react'
import Navbar from '../components/Navbar'
import ContactUsForm from '../components/ContactUsForm'
import Footer from '../components/Footer'

function ContactUs() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className='flex laptop:flex-row mobile:flex-col tablet:flex-row mobile:justify-start laptop:justify-evenly tablet:justify-evenly laptop:mt-[4%] tablet:mt-[6%] mobile:mt-[20%] w-[100%]'>
        <div className='w-[50%] m-auto font-extrabold text-3xl bg-blue-300 bg-opacity-20 h-fit laptop:p-20 mobile:p-4 mobile:w-fit mobile:rounded-[10px] laptop:rounded-[20px] mt-20'>
          <div className='desktop:text-[4.2rem] laptop:text-[3.8rem] tablet:text-[3.8rem]'>
            CONTACT US
            <div className='font-normal leading-3 mobile:text-xl mt-10 flex flex-col'>
              <div className='my-3'>
                <span>Phone.No : </span> <code>+91 94717 43335</code>
              </div>
              <div className='my-3'>
                <span>Email : </span> <code>pkranjan1046@gmail.com</code>
              </div>
              <div className='mt-3'>
                <span>Address: </span><code> ITER-Collage, BBSR</code>
              </div>
              <code>
                Odisha, Khordha district<br />
                zip-code: 75-10-30 <br />
                address: Close to BUS Stand
              </code>
            </div>
          </div>
        </div>
        <div className='laptop:w-[50%] tablet:w-[50%] mobile:w-[100%] flex font-bold justify-center mt-20 align-middle w-100'>
          <ContactUsForm title={"Contact Form"} />
        </div>
      </section>
      <section className='mt-20'>
        <Footer />
      </section>
    </div>
  )
}

export default ContactUs
