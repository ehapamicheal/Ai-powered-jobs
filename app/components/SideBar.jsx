"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ZimcrestLogo from '@/public/images/zimcrest-logo.png';
import Avatar from '@/public/images/avatar.png';
import { navLinks } from '../data/Data';
import { usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";


const SideBar = ({ isSidebarOpen, onToggleSidebar }) => {

    const pathname = usePathname();

  return (
    <nav className={`nav_container flex flex-col top-0 fixed pt-5 pb-3 w-64 h-screen border-r border-gray-1  ${isSidebarOpen ? "active" : ""}`}>
        <aside className="aside_wrapper pl-4 pr-3 relative h-screen">
            <div className="close_box xl:hidden block">
                    <MdOutlineClose   onClick={onToggleSidebar}
                        className="close_menu cursor-pointer text-2xl"
                    />
                    </div>

            <Link href="" className="flex flex-col items-center justify-center">
                <Image src={ZimcrestLogo} alt="Zimcrest logo" />
            </Link>

            <div className="title_menu mt-5 ml-7">
                <p className="font-medium text-black-1 text-sm">Main menu</p>
            </div>

            <ul className="nav-links mt-2 ml-7 flex flex-col">
                {navLinks.map((link) => { 
                    const isActive = pathname === link.path || (pathname === "/" && link.path === "/");


                    return (
                        <li key={link.id} className="list-none w-full">
                            <Link
                            href={link.path}
                            className={`group flex items-center gap-2 h-9 transition-all duration-300 hover:text-yellow ${
                                isActive ? "text-yellow font-bold" : "text-black-1"
                            }`}
                            >
                            <span className={`group-hover:text-yellow ${isActive ? "text-yellow" : "text-gray-2"}`}>
                                {link.icon}
                            </span>
                            <p className="text-base font-normal font-dm">{link.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>


            <div className="sidebar_bottom border-t border-gray-1 pt-3 absolute bottom-0">

                <div className="flex space-x-3">
                    <div className="">
                        <Image className="object-cover" src={Avatar} alt="avatar" />
                    </div>
                    <div className="">
                        <p className="font-semibold text-base text-black-3 leading-4">Micheal Ehapa</p>
                        <span className="font-normal text-sm text-gray-3">ehapamicheal@gmail.com</span>
                    </div>
                </div>
                
            </div>
        </aside>
    </nav>
  )
}

export default SideBar;