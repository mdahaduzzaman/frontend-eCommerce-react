import React from 'react'

function Login() {
  return (
    <div className='p-10'>
      <h2 className='text-xl mb-7 max-w-md mx-auto'>Welcome to eCommerce! Please login.</h2>
      <form className="max-w-md mx-auto bg-[--white-color] border border-[--primary-color] rounded-lg p-5">

        <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_email" id="floating_email" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_email" className="signup-label">Email or Phone number</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password" className="signup-input peer" placeholder=" " required />
            <label htmlFor="floating_password" className="signup-label">Password</label>
        </div>      
        <button type="submit" className="text-white bg-[--primary-color] hover:bg-[--secondary-color] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[--primary-color] dark:hover:bg-[--dark-color] dark:focus:ring-[--dark-color]">Submit</button>
      </form>
    </div>
  )
}

export default Login