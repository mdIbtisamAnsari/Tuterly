import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../userContext.ts"



const LandingPage = () => {

  const { user } = useContext(UserContext)


  return (
    <>
      <div className="relative flex items-center justify-center" style={{ height: 'calc(60vh - 100px)' }}>
        <img src="logo.svg" alt="logo" className="w-100 h-100 object-contain filter blur-lg" />
        <h1 className="absolute text-7xl font-semibold text-white text-center max-w-200">
          Welcome to Tuterly
        </h1>

      </div>
      <div className='h-[30vh]'>
        {!user && (
          <>
            <div className="*:m-1 h-[20vh] items-center flex justify-center">
              <Link to="/login" className="bg-[#00FEDB] py-5 px-10 text-black font-bold rounded-tl-full">Login</Link>
              <Link to="/signup" className="bg-[#00FFB3] py-5 px-8 text-black font-bold rounded-br-full">Register</Link>
            </div>
          </>
        )}

        <div className="sm:hidden">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>

      </div>
      <p className="text-center text-.xs max-w-300 m-auto">
        Tuterly is an online tutoring platform that connects students with qualified tutors in various subjects. Our mission is to provide high-quality education and personalized learning experiences to students of all ages and backgrounds. Whether you're looking for help with math, science, languages, or any other subject, Tuterly has a tutor for you. Join us today and start your learning journey!
      </p>
    </>
  )
}

export default LandingPage