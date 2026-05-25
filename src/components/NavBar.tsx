//navbar component

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'

const NavBar = () => {
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <>
    <div>
    <div className='bg-blue-900 py-3 max-sm:py-2 px-5 flex items-center'>
      <img src="./logo.svg" alt="Logo" className='h-12 max-sm:h-10'/>
      <Link to="/" className='text-white hover:underline text-2xl'>Tuterly</Link>
    </div>
    </div>
    </>
  )
}

export default NavBar