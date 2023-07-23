import React from 'react';
import logo from '../Images/logo.png';

const Header = () => {
    // const logo = './Images/logo.png';
    return (
        <header className=" bg-[#FFB84C] p-4">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Your Logo */}
                        <a href="/" className="text-violet-700 font-bold text-xl">
                            <img className='w-10 h-10 inline mr-2' src={logo} alt="logo" />
                            Keep Notes
                        </a>
                    </div>
                    {/* <div className="hidden md:flex">
                        Navigation Links
                        <a href="/" className="text-white mx-4 hover:underline">
                            Home
                        </a>
                        <a href="/about" className="text-white mx-4 hover:underline">
                            About
                        </a>
                        <a href="/contact" className="text-white mx-4 hover:underline">
                            Contact
                        </a>
                        Add more navigation links as needed
                    </div> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
