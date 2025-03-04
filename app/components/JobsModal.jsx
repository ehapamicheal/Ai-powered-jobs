
  

"use client";


import { IoClose } from "react-icons/io5";


const JobsModal = ({ job, onClose }) => {
    if (!job) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-30">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-end justify-end mb-1">
            <IoClose  onClick={onClose} className="cursor-pointer text-lg" />
          </div>
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
          <p className="font-semibold">{job.salary}</p>
          <p className="text-sm mt-2">Skills: {job.requiredSkills.join(", ")}</p>
          <button className="mt-4 px-4 py-2 bg-yellow text-white rounded">
            Apply
          </button>
        </div>
      </div>
    );
  };
  
export default JobsModal;
  