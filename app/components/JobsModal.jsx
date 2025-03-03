
  

"use client";


const JobsModal = ({ job, onClose }) => {
    if (!job) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
          <p className="font-semibold">{job.salary}</p>
          <p className="text-sm mt-2">Skills: {job.requiredSkills.join(", ")}</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    );
  };
  
export default JobsModal;
  