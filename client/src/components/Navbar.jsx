import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="mx-24 flex justify-between align-middle">

        <div className="text-black text-5xl font-bold font-['Caveat'] w-[247px]">Advertise Insides</div>
        <div className="align-middle justify-center flex m-3">
          <ul className="flex justify-center gap-x-5 font-sans text-xl capitalize font-['Times New Roman']">
            <Link to="/" className="text-blue-700">
              Home
            </Link>
            <Link to="/advertise">advertise</Link>
            <Link to="/advertise">Dashboard</Link>
            <Link to="/about">about</Link>
          </ul>
        </div>
      </div>
      <div className="mx-24 h-0.5 bg-black" />
    </>
  );
}

export default Navbar;
