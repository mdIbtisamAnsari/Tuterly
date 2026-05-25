//navbar component

import { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../userContext'

const NavBar = () => {
  const { user } = useContext(UserContext)
  const location = useLocation()

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <>
      <div className='bg-gray-900 py-3 max-sm:py-2 px-5 flex items-center justify-between'>

        <div className="flex items-center">
          <img src="./logo.svg" alt="Logo" className='h-12 max-sm:h-10' />
          <Link to="/" className='text-white hover:underline text-2xl'>Tuterly</Link>
        </div>

        {(!isAuthPage) && (
          <div className="flex items-center gap-5 *:max-sm:gap-3 *:max-sm:hidden">

            {user &&
              (<NavLink to="/portal" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-100 '}>Portal</NavLink>
              )}

            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-100 '}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-100 '}>Contact</NavLink>

          </div>)}

        <div>

          {user ? (
            <>
            
            <Link to="/profile">
            
            <span className='text-white text-lg font-bold bg-emerald-900 p-2 mr-2 rounded-full '>{user.results[0].name.first.split("")[0]}</span>
            <span className='text-white text-lg font-bold'>{user.results[0].name.first}</span>

            </Link>

            
            </>
          ) : (
            <>
              {!isAuthPage && (<div className="flex items-center  rounded-br-full rounded-tl-full px-5 py-2 bg-linear-to-r from-blue-800 to-[#00FFB3] p-4 text-white *:text-shadow-2xl">
                <Link to="/login" className='text-white hover:underline'>Login</Link>
                <Link to="/signup" className='text-white hover:underline ml-4'>Signup</Link>
              </div>)}
            </>
          )}

        </div>

      </div>
    </>
  )
}

export default NavBar