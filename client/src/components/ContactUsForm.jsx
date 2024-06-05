import { useState } from 'react'
import PropTypes from 'prop-types';

// import DangerAlert from './DangerAlert'
// import SuccessAlert from './SuccessAlert'

function UserForm({ title }) {
  const [email, setEmail] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [message, setMessage] = useState("")
  const [phoneno, setPhoneNo] = useState("")
  const [companyName, setCompanyName] = useState("")

  // const alertRef = useRef(null)

  const submitHandler = async (event) => {
    event.preventDefault()

  }
  return (
    <>
      <div className='flex flex-col gap-10 laptop:w-[40vw] mobile:w-[90vw] tablet:w-[90vw] '>
        <div className='border-2 border-black rounded-lg laptop:w-[40vw] mobile:w-[90vw] tablet:w-[90vw] desktop:w-[40vw]'>
          <h1 className='text-2xl my-4 flex justify-center'>{title}</h1>
          <div className='border-2 border-gray-500 w-auto mx-8 my-8'></div>
          <form className="max-w-full m-8">
            <div className='flex flex-col mx-auto'>
              <div className="relative z-0 w-full mb-5 group">
                <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="flex mobile:flex-col laptop:flex-row desktop:flex-row tablet:flex-row mobile:gap-y-0 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(event) => setFirstName(event.target.value)} value={first_name} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(event) => setLastName(event.target.value)} value={last_name} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
              </div>
              <div className="flex mobile:flex-col laptop:flex-row desktop:flex-row tablet:flex-row mobile:gap-y-0 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(event) => setPhoneNo(event.target.value)} value={phoneno} type="tel" minLength={10} maxLength={10} name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(event) => setCompanyName(event.target.value)} value={companyName} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company/Business</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
              </div>

              <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">Your message</label>
              <textarea style={{ resize: "none" }} onChange={(event) => setMessage(event.target.value)} value={message} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            </div>
            <button onClick={submitHandler} type="submit" className="flex justify-start my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center">Submit</button>
          </form>

        </div>
        <div>
          {/* <div ref={alertRef}>
            {emailSend == 'Email Counld not be Send!' ? <DangerAlert message={emailSend} alertRef={alertRef} /> : emailSend == 'Email sent successfully!' ? <SuccessAlert message={emailSend} alertRef={alertRef} /> : <></>}
          </div> */}
        </div>
      </div>
    </>
  )
}

UserForm.propTypes = { title: PropTypes.string.isRequired };
export default UserForm
