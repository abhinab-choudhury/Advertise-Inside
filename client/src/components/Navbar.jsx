import React, { useState } from 'react';
import Logo from './../assets/Advertise_Insides.svg'
import Menu from './../assets/menu.png'
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='w-100 p-6'>
        <div className="backdrop-blur-[10px] fixed top-0 z-50 w-[100vw] mb-10 h-20 mobile:h-fit flex justify-between align-middle">
          <div className='p-4 w-[85vw] flex justify-between align-middle ml-auto mr-auto'>
            <img className='mobile:w-[210px] tablet:w-[200px] laptop:w-[247px] desktop:w-[290px]' src={Logo} alt="Advertise_Insides.svg" />
            <div className='flex mt-auto mb-auto'>
              <ul className="laptop:flex tablet:flex mobile:hidden desktop:flex justify-center gap-x-5 font-sans text-xl capitalize font-['Times New Roman']">
                <Link to="/" className="text-blue-700">
                  Home
                </Link>
                <Link to="/advertise">advertise</Link>
                <Link to="/about">about</Link>
              </ul>

              <button className='mobile:block laptop:hidden desktop:hidden tablet:hidden'>
                <img className='w-[40px]' src={Menu} alt='menu' onClick={toggleNavbar} />
              </button>
            </div>
          </div>
        </div>
        <div className={`fixed top-20 left-10 right-10 bg-white bg-opacity-10 shadow-lg backdrop-blur-[10px] rounded-[20px] z-50 transition duration-300 ease-in-out transform ${isOpen ? 'block' : 'hidden'}`}>
          <div className="backdrop-blur-[10px] bg-opacity-10 bg-gray-100 rounded-[10px] w-full px-3 py-4">
            <ul className="flex flex-col justify-center gap-y-4 text-xl capitalize font-['Times New Roman']">  <Link to="/" className="text-blue-700 hover:rounded-[10px] p-2 hover:underline">
              Home
            </Link>
              <Link className='hover:rounded-[10px] p-2 hover:underline' to="/advertise">advertise</Link>
              <Link className='hover:rounded-[10px] p-2 hover:underline' to="/about">about</Link>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
