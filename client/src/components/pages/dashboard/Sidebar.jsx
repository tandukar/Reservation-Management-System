import React, { useState } from "react";
// import RiHomeLine from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TbBuildingHospital } from "react-icons/tb";
// import Profile from "../profile/Profile";
import { IoLogOut, IoNewspaperOutline } from "react-icons/io5";
import { BsCalendar2Range } from "react-icons/bs";

const ProfileHandler = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-3 w-150">
        <div className="flex justify-end">
          <RxCross2
            onClick={onCancel}
            className="text-3xl  absoulte  text-red-400  hover:text-pink-600"
          />
        </div>
        <div className="px-6">
          {/* <Profile /> */}
          suiii
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, onItemClick }) => {
  const [visibleIcon, setvisibleIcon] = React.useState(false);
  const [showProfile, setshowProfile] = useState(false);

  const showProfileHandler = () => {
    setshowProfile(true);
  };

  const hideProfileHandler = () => {
    setshowProfile(false);
  };
  const approveStatusHandler = () => {
    setshowProfile(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("role");
    window.location.href = "/login";
  };

  const itemClickHandler = (item) => {
    onItemClick(item);
  };
  return (
    <>
      <div className="flex cursor-default">
        <div
          className="flex flex-col h-screen bg-teal-700 w-60  "
          onMouseEnter={() => setvisibleIcon(true)}
          onMouseLeave={() => setvisibleIcon(false)}
        >
          <div className="space-y-3">
            <div className="flex flex-row mt-4 ">
              <div className="flex  items-center ">
                <p className="text-lg text-white font-bold p-3 ">
                  Sunny Guest House
                </p>
              </div>

              <div className="flex items-center justify-end">
                <RxCross2
                  onClick={() => setSidebarOpen(false)}
                  className={`text-white h-7 w-7 transform transition-all duration-300 ease-in-out ${
                    visibleIcon || window.innerWidth <= 768
                      ? "opacity-1"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div className="flex items-center  p-5 ">
              <nav>
                <ul className="list-none text-md mt-9">
                  <li className="py-2">
                    <a
                      className=" flex items-center text-white md:text-gray-300 hover:text-white"
                      onClick={() => onItemClick("Dashboard")}
                    >
                      <span className="inline-block  pr-3">
                        <BsCalendar2Range className="w-7 h-7" />
                      </span>
                      <p className="tracking-wider font-semibold">Calendar</p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-auto p-5">
            {/* <a
              className=" flex items-center text-white md:text-gray-300 hover:text-white mb-2"
              // onClick={logoutHandler}
              onClick={() => showProfileHandler()}
            >
              <span className="inline-block  pr-2">
                <IoIosSettings className="w-7 h-7" />
              </span>
              <p className="tracking-wider font-semibold">Settings</p>
            </a> */}
            <a
              className=" flex items-center text-white md:text-gray-300 hover:text-white"
              onClick={logoutHandler}
            >
              <span className="inline-block  pr-3">
                <IoLogOut className="w-7 h-7 " />
              </span>
              <p className="tracking-wider font-semibold">Logout</p>
            </a>
          </div>
        </div>
      </div>
      {showProfile && (
        <ProfileHandler
          onCancel={hideProfileHandler}
          onConfirm={approveStatusHandler}
          // id={patientId}
          // recepId={recepId}
        />
      )}
    </>
  );
};
export default Sidebar;
