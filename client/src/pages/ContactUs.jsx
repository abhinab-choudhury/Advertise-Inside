import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactUs() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className='flex laptop:mt-[4%] tablet:mt-[6%] mobile:mt-[20%] w-[100vw] justify-center'>
        <div className='font-extrabold text-3xl bg-blue-300 bg-opacity-20 h-fit laptop:p-20 mobile:p-4 mobile:w-fit mobile:rounded-[10px] laptop:rounded-[20px] mt-20'>
          <div className='desktop:text-[4.2rem] laptop:text-[3.8rem] tablet:text-[3.8rem]'>
            CONTACT US
            <div className='font-normal leading-3 mobile:text-xl mt-10'>
              <span>Phone.No : </span> <code>+91 xxx-xxx-xxxx</code> <br />
              <span>Email : </span> <code>email@gmail.com</code> <br />
              <span>Address: </span> <br />
              <code>
                state, district, lane.No: xx <br />
                zip-code: XX-XX-XX <br />
                address: Close to BUS Stand
              </code>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-20'>
        <Footer />
      </section>
    </div>
  )
}

export default ContactUs
