import React, { useState } from 'react';
import Logo from './../assets/svg/Advertise_Insight.svg'
import Menu from './../assets/img/menu.png'
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="backdrop-blur-[10px] fixed top-0 z-50 mb-10 h-20">
          <div className='p-4 w-[100vw] mobile:right-6 flex justify-between align-middle ml-auto mr-auto'>
            <img className='mobile:w-[200px] tablet:w-[200px] laptop:w-[247px] desktop:w-[290px]' src={Logo} alt="Advertise_Insides.svg" />
            <div className='flex mt-auto mb-auto'>
              <ul className="mx-10 laptop:flex tablet:flex mobile:hidden desktop:flex justify-center gap-x-5 font-sans font-semibold text-xl capitalize font-['Times New Roman']">
                <NavLink to="/" className={({ isActive }) => {
                  return (isActive ? "text-blue-700" : "text-black")
                }}>
                  Home
                </NavLink>
                <NavLink
                  to="/advertise"
                  className={({ isActive }) => {
                    return (isActive ? "text-blue-700" : "text-black")
                  }}>advertise</NavLink>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) => {
                    return (isActive ? "text-blue-700" : "text-black")
                  }}>Contact Us</NavLink>
              </ul>

              <button className='mobile:block laptop:hidden desktop:hidden tablet:hidden'>
                <img className='w-[40px] mx-3' src={Menu} alt='menu' onClick={toggleNavbar} />
              </button>
            </div>
          </div>
        </div>
        <div className={`fixed top-20 left-10 right-10 bg-white bg-opacity-10 shadow-lg backdrop-blur-[10px] rounded-[20px] z-50 transition duration-300 ease-in-out transform my-2 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="backdrop-blur-[10px] bg-opacity-10 bg-gray-100 rounded-[10px] w-full px-3 py-4">
            <ul className="flex flex-col justify-center gap-y-4 text-xl capitalize font-['Times New Roman']">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return (isActive ? "hover:rounded-[10px] p-2 hover:underline text-blue-700" : "hover:rounded-[10px] p-2 hover:underlinetext-black")
                }}>Home
              </NavLink>
              <NavLink to="/advertise" className={({ isActive }) => {
                return (isActive ? "hover:rounded-[10px] p-2 hover:underline text-blue-700" : "hover:rounded-[10px] p-2 hover:underlinetext-black")
              }}>advertise
              </NavLink>
              <NavLink to="/contactus" className={({ isActive }) => {
                return (isActive ? "hover:rounded-[10px] p-2 hover:underline text-blue-700" : "hover:rounded-[10px] p-2 hover:underlinetext-black")
              }}>Contact Us
              </NavLink>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
