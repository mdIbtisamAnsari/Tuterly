import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../userContext.ts"
import { motion } from "motion/react"
import LandingPageAnim from "../components/LandingPageAnim.tsx"



const LandingPage = () => {

    const { user } = useContext(UserContext)


    return (
        <>
            <div className="relative flex mt-10 max-sm:mt-0 items-center justify-center" style={{ height: 'calc(60vh - 100px)' }}>
                <motion.img
                    animate={{ opacity: [0, 1], scale: [1.0, 1] }}
                    transition={{ duration: 1 }}
                    src="logo.svg" alt="logo" className="h-[60vh] object-contain filter blur-lg" />
                <motion.h1
                    animate={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ duration: 1 }}
                    className="absolute text-7xl font-semibold text-white text-center max-w-200">
                    Welcome to Tuterly 
                </motion.h1>

            </div>
            <motion.div
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="sm:hidden *:w-[75vw] flex flex-col items-center gap-5 *:text-center my-15">


                {user && (<Link
                    to="/portal"
                    className="bg-[#00FFB3] py-3 px-5 text-black z-5 font-bold rounded-tl-full rounded-br-full hover:bg-[#ffffff46] hover:border hover:text-white border border-[#00FFB3] hover:border-white">
                    Portal
                </Link>)}


                <Link
                    to="/contact"
                    className="border border-white bg-transparent py-3 px-5 text-white z-5 font-bold rounded-tl-full rounded-br-full hover:bg-[#00ffb386] hover:border-[#00FFB3] hover:text-black transition">
                    Contact</Link>
                <Link
                    to="/about"
                    className="bg-[#00FFB3] py-3 px-5 text-black z-5 font-bold rounded-tl-full rounded-br-full hover:bg-[#ffffff46] hover:border hover:text-white border border-[#00FFB3] hover:border-white">
                    About</Link>


            </motion.div>


            {!user && (
                <>
                    <div className='h-[30vh] transform translate-y-10 flex items-center justify-center'>
                        <motion.div
                            whileInView={{ opacity: [0, 1], y: [20, 0] }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ margin: "0px", once: true }}
                            className="*:m-1 h-[20vh] items-center flex justify-center">


                            <Link
                                to="/login"
                                className="bg-[#00FEDB] py-5 px-10 text-black z-5 font-bold rounded-tl-full hover:bg-[#00FFB3] hover:border hover:text-white border border-[#00FFB3] hover:border-white"
                            >Login
                            </Link>


                            <Link
                                to="/signup"
                                className="bg-[#00FFB3] py-5 px-8 z-5 text-black font-bold rounded-br-full"
                            >Register</Link>


                        </motion.div>
                    </div>
                </>
            )}

            <div className="text-center mb-16 sm:mt-45">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                    Sketch Your Learning Journey
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    From setting goals to coding apps and speaking fluently—our tutors guide you every step of the way.
                </p>
            </div>

            <LandingPageAnim />

            <p className="text-center text-2xs max-w-300 mx-auto mt-30 px-10">
                Tuterly is an online tutoring platform that connects students with qualified tutors in various subjects. Our mission is to provide high-quality education and personalized learning experiences to students of all ages and backgrounds. Whether you're looking for help with math, science, languages, or any other subject, Tuterly has a tutor for you. Join us today and start your learning journey!
            </p>


        </>
    )
}

export default LandingPage