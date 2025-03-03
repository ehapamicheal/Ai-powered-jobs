"use client";

import Header from '@/app/components/Header';
import JobList from '@/app/components/JobList';

export default function Home() {

  return (
    <>

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
