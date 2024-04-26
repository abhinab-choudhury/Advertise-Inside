import React from 'react';
import Logo from './../assets/Advertise_Insides.svg'
import Menu from './../assets/menu.png'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <div className="backdrop-blur-[10px] fixed top-0 z-50 w-[100vw] mb-10 h-20 flex justify-between align-middle">
        <div className=' w-[85vw] flex justify-between align-middle ml-auto mr-auto'>
          <img className='mobile:w-[150px] tablet:w-[200px] laptop:w-[247px] desktop:w-[290px]' src={Logo} alt="Advertise_Insides.svg" />
          <div className='flex mt-auto mb-auto'>
            <ul className="laptop:flex tablet:flex mobile:hidden desktop:flex justify-center gap-x-5 font-sans text-xl capitalize font-['Times New Roman']">
              <Link to="/" className="text-blue-700">
                Home
              </Link>
              <Link to="/advertise">advertise</Link>
              <Link to="/about">about</Link>
            </ul>
            <button className='mobile:block laptop:hidden desktop:hidden tablet:hidden'>
              <img className='w-[40px]' src={Menu} alt='menu' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
