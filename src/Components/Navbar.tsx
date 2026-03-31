import type React from "react";
import { Link } from "react-router-dom";


type NavbarProps = {
    user: { fullName: string; profile?: string; email: string, role:'teacher'|'student' } | null;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    return (
        <>
           <nav className="flex items-center justify-between p-4 bg-tersary text-white sticky w-full top-0 left-0 z-50 shadow-lg max-sm:px-2">
                <Link to={"/"} className="flex items-center sm:gap-2">
                    <img src="/logo.svg" alt="logo" className="w-10 h-10" />
                    <h1 className="text-shadow-xs text-xl md:text-2xl font-medium text-white hover:underline cursor-pointer font-heading font">TuterLy</h1>
                </Link>
                {!user ? (<div className="*:hover:border *:hover:border-accent">
                    <Link to={"/login"} className="pr-4 pl-6 py-2 rounded-tl-full bg-secondary font-medium ">Login</Link>
                    <Link to={"/register"} className="ml-2 pl-4 pr-6 py-2 rounded-br-full bg-secondary font-medium  " >Register</Link>
                </div>):(<div className="flex items-center gap-2 font-heading md:text-xl">
                    {user.profile ? (<img src={user.profile} alt="profile" className="w-10 h-10 rounded-full" />):(<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">{user.fullName.split("")[0]} </div>)}
                    <Link to={"/profile"} className=" rounded-md  font-medium">{user.fullName.split(" ")[0]}</Link>
                    
                </div>)}
            </nav>
        </>
    );
};


export default Navbar