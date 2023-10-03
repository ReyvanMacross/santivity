import { useState } from "react";
import Navbar from './Navbar';
import Profile from './Profile';
import AboutUs from './AboutUs';
import VideoComponent from './VideoComponent';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className=" w-full bg-amber-50 shadow  ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  ">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <img src="https://i.imgur.com/2ErERXm.png" class="h-12 mr-6" alt="Santivity Logo" />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black-600 hover:text-blue-600">
                                <a href="#about">About </a>
                            </li>
                            <li className="text-black-600 hover:text-blue-600">
                                <a href="#video">Video</a>
                            </li>
                            <li className="text-black-600 hover:text-blue-600">
                                <a href="#blog">About US</a>
                            </li>
                            <li className="text-black-600 hover:text-red-600">
                                <b><a target="_blank" href="https://www.mediafire.com/file/8oj1qn48v6jkxp8/Pre-Alpha_RAR_PROJECT-1_0_0-windows.exe/file">Game Play</a></b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
