import React from 'react'
import google from '../assets/google.png'
function Signup() {
  return (
    <div className='p-10'>
      <h2 className='max-w-md mx-auto text-xl mb-7'>Create your eCommerce Account</h2>
      <form className="max-w-md mx-auto bg-[--white-color] border border-[--primary-color] rounded-lg p-5">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="floating_first_name" className="signup-input peer" placeholder=" " required />
              <label htmlFor="floating_first_name" className="signup-label">First name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_last_name" id="floating_last_name" className="signup-input peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="signup-label">Last name</label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" id="floating_email" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_email" className="signup-label">Email address</label>
            <button className='absolute bg-[--secondary-color] rounded-md right-0 bottom-1 px-2 py-1 text-[.6rem]'>Send code</button>
        </div>

        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_code" id="floating_code" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_code" className="signup-label">Verification code</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="floating_phone" id="floating_phone" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_phone" className="signup-label">Phone number</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_password" className="signup-label">Password</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="repeat_password" id="floating_repeat_password" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_repeat_password" className="signup-label">Confirm password</label>
        </div>
        <div className='flex items-center justify-between'>
          <button type="submit" className="text-white bg-[--primary-color] hover:bg-[--secondary-color] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[--primary-color] dark:hover:bg-[--dark-color] dark:focus:ring-[--dark-color]">Submit</button>
          <div className='flex gap-5'>
            <span>Or sign up with</span>
            <img src={google} alt="" className='w-5 h-5 object-cover'/>
            <img src={google} alt="" className='w-5 h-5 object-cover'/>
            <img src={google} alt="" className='w-5 h-5 object-cover'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup