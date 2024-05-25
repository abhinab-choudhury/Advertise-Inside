import React, { useState } from 'react'
import UserForm from './ContactUsForm';
import AddressForm from './AddressForm';

function Form() {
  const [currentPage, setCurrentPage] = useState(0)
  const page = [
    {
      content: <UserForm title="User Form" />
    },
    {
      content: <AddressForm title="Address Form" />
    }
  ]

  const handlePrevious = () => {
    if (currentPage - 1 >= 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage + 1 < page.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {page[currentPage].content}
      <div className='flex flex-row justify-between w-full'>
        <button onClick={handlePrevious} type="button" className="flex justify-start my-6 border-2 border-black text-black hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center">Previous</button>
        <button onClick={handleNext} type="button" className="flex justify-start my-6 border-2 border-black text-black hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center">Next</button>
      </div>
    </>
  )
}

export default Form
