import React from 'react'
import Logo from './../assets/svg/Advertise_Insight.svg'
import Instagram from './../assets/img/instagram.png'
import Facebook from './../assets/img/facebook.png'
import Twitter from './../assets/img/twitter.png'

function Footer() {
  return (
    <>
      <div className='mobile:block flex laptop:flex-col justify-center align-middle'>
        <hr className='w-[98vw] border-2 border-blue-900 my-5 ml-auto mr-auto' />
        <div className='mobile:block flex laptop:flex p-8 justify-evenly align-middle'>
          <div className='mt-auto mb-auto mobile:mb-2'>
            <img className='w-[180px]' src={Logo} alt='Advertise Insight Logo' />
          </div>
          <div className='mobile:mb-2 font-extralight text-xxs mt-auto mb-auto'>
            © 2024 Advertise Insight Advertising Media All Rights Reserved.
          </div>
          <div className='flex gap-5'>
            <a href='/'>
              <img className='w-[55px]' src={Instagram} alt='instagram.png' />
            </a>
            <a href='/'>
              <img className='w-[50px]' src={Facebook} alt='facebook.png' />
            </a>
            <a href='/'>
              <img className='w-[50px]' src={Twitter} alt='twitter.png' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer