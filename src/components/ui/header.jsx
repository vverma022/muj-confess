import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>
        <div className='text-white font-bold text-2xl'>
            MUJ CONFESSIONS
        </div>
    </div>
  )
}

export default Header

//Create a diffrent header for the main page. This will be done
//by using the useLocation hook from react-router-dom