import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-600"> */}
      <nav className="relative flex flex-wrap items-center justify-between w-full">
        <div className="container  mx-auto flex flex-wrap py-1 items-center justify-between">
          <div>
            <a
              // className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              className="text-md font-bold leading-relaxed inline-block mr-8  whitespace-nowrap uppercase text-neutral-700"
              href="#pablo"
            ></a>
          </div>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              // className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              className="text-md font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase text-neutral-700"
              href="#pablo"
            >
              Nepal Squash Racket Association
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
              <AiOutlineMenu className="text-black" />
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-sm uppercase font-bold leading-snug  text-neutral-700 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  text-neutral-700 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Players</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center text-sm uppercase font-bold leading-snug  text-neutral-700 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-5">
                    <button className="bg-white hover:bg-black hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded transition duration-500 transform hover:-translate-y-1">
                      Contact
                    </button>

                    {/* shine box */}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
