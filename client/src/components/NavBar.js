import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function NavBar(props) {
    return (
        <div>
            <div
                className="flex justify-between md:justify-around py-4 w-full top-0 left-0 right-0 z-10 px-8 md:px-3">

                <div className="flex items-center">

                    <a className="cursor-pointer">
                        <h3 className="text-4xl w-72 font-medium text-white">
                            Buy Nothing
                        </h3>
                    </a>
                </div>

                <div
                    className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0 text-xl">

                    <Link to="/home">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Home</span>
                    </Link>

                    <Link to="/items">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Items</span>
                    </Link>

                    <Link to="/eventlist">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Events</span>
                    </Link>

                    <Link to="/addevent">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Add Event</span>
                    </Link>

                    <Link to="/profile">
                        <span className="inline-flex w-auto px-3 py-2 rounded hover:bg-tertiary cursor-pointer text-white">Profile</span>
                    </Link>

                </div>

                <NavLink className="flex items-center space-x-5 md:flex w-36" to="/login">
                    <a className="flex text-white cursor-pointer transition-colors duration-300 font-semibold -ml-6">
                        <svg
                            className="fill-current h-5 w-5 mr-2 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                        </svg>

                        Log Out
                    </a >
                </NavLink>

                <button
                    className="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100">
                    <svg
                        className="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default NavBar;