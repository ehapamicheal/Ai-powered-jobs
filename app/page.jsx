"use client";

import Header from '@/app/components/Header';
import JobList from '@/app/components/JobList';
// import SideBar from './components/SideBar';
// import { useState } from "react";

export default function Home() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev) => !prev);
  // };

  return (
    <>
      {/* <div className="flex">       
        <SideBar  isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        <div className="right_section xl:ml-64 h-screen w-screen flex flex-col bg-lightGray-2 z-10">
          <Header  toggleSidebar={() => setIsSidebarOpen(true)}>
            <div className="top_title">
              <h3 className="font-semibold text-lg text-black-2">Job Match</h3>
            </div>
          </Header>

          <div className="mt-20 mx-4">


            <JobList />
          </div>
        </div>

      </div> */}

      <div className="right_section ml-64 h-screen w-screen flex flex-col bg-lightGray-2 z-10">
        <Header>
          <div className="top_title">
            <h3 className="font-semibold text-lg text-black-2">Job Match</h3>
          </div>
        </Header>

        <div className="mt-20 mx-4">
      

          <JobList />
        </div>
      </div>
    </>
  )
}
