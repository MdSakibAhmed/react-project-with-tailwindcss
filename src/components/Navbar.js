import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle,isOpen}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-light text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/" className="pl-8">Egg
        </Link>
        <div className="px-8 cursor-pointer md:hidden" onClick={toggle}>
        {isOpen?<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>:<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> }
        

        </div>
        <div className="pr-8 md:block hidden">
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/menu">Menu</Link>
            <Link className="p-4" to="/about">About</Link>
            <Link className="p-4" to="/">Contact</Link>
        </div>
 
        </nav>
        
       
    )
};

export default Navbar;