"use client";

import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import Avatar from '@/public/images/avatar.png'






const Header = ({ children, onToggleSidebar }) => {
 
  return (
    <header className="header_container bg-white shadow-md fixed top-0 w-screen h-14 xl:left-64 lg:left-0 xl:w-[calc(100%-16rem)] px-3 py-3 z-10">
      <div className="flex items-center justify-between">

          <div className="header_menu flex items-center gap-2">
                    <div className="menu_box xl:hidden">
                      <RxHamburgerMenu onClick={onToggleSidebar}
                        className="open_menu cursor-pointer text-2xl"
                        
                      />
                    </div>

                    <div className="top_title">
                      {children}  
                    </div>
                  </div>

          <div className="search_box_wrapper flex items-center gap-1 border border-gray-1 p-1 rounded-full">
            <BiSearch className="search_icon" />
            <input className="outline-none border-none text-base text-black-1 leading-2 placeholder-gray-4" type="text" placeholder="Search Users" />  
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <IoIosNotifications className="cursor-pointer text-xl" />
              <div className="absolute -top-1 -right-2 bg-darkRed rounded-full flex items-center justify-center p-2 w-[8px] h-[8px]">
                <p className=" text-white font-bold text-xs" style={{ fontSize: "6.92px" }}>26</p>
              </div>
            </div>

            <div className="cursor-pointer">
              <Image src={Avatar} alt="avatar" />
            </div>
          </div>
      </div>
    </header>
  );

};

export default Header; 