"use client";
import Header from '../components/Header';

import React from 'react'

const page = () => {
  return (
    <div className="right_section ml-64 h-screen w-screen flex flex-col bg-lightGray-2 z-10">
      <Header>
        <div className="top_title">
          <h3 className="font-semibold text-lg text-black-2">Messages</h3>
        </div>
      </Header>
    </div>
  )
}

export default page;