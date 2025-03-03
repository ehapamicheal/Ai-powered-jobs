"use client";


import { useEffect, useState } from "react";
import JobsModal from "../components/JobsModal";
import Image from "next/image";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);

    // Mock user skills
    const userSkills = ["React", "JavaScript", "CSS", "Node.js", "MongoDB", "Figma", "Tailwind CSS"];

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("/api/jobs");
                if (!response.ok) throw new Error("Failed to fetch");

                let data = await response.json();

                // Compute match score if missing
                const updatedJobs = data.map((job) => ({
                    ...job,
                    matchScore: job.matchScore ?? calculateMatchScore(job.requiredSkills, userSkills),
                }));

                setJobs(updatedJobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Function to calculate match score
    const calculateMatchScore = (requiredSkills, userSkills) => {
        if (!requiredSkills || requiredSkills.length === 0) return 0;

        const matchedSkills = requiredSkills.filter((skill) => userSkills.includes(skill)).length;
        return Math.round((matchedSkills / requiredSkills.length) * 100);
    };

    // Function to determine score color
    const getScoreColor = (score) => {
        if (score >= 80) return "bg-green-500";
        if (score >= 50) return "bg-yellow";
        return "bg-red-1";
    };

    return (
        <div className="mt-6 mb-4">
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <div className="animate-spin h-10 w-10 border-t-4 border-yellow border-solid rounded-full"></div>
                </div>
            ) : jobs.length === 0 ? (
                <p className="text-center text-gray-500">No jobs available.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="jobs_card p-4 border rounded-lg shadow-lg hover:border-yellow transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-104"
                        >
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <div className="relative w-12 h-12 mb-2 rounded overflow-hidden">
                                        <Image src={job.logo} alt={job.company} objectFit="cover" layout="fill" />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-black-2">{job.title}</h4>
                                        <p className="font-semibold text-sm text-yellow">{job.company}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${getScoreColor(job.matchScore)}`}></span> 
                                    <span className="text-black text-sm">Match: {job.matchScore}%</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-1 mt-1 pt-3">
                                <p className="text-black-2 font-normal text-sm">{job.location}</p>

                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-black-2 text-base">{job.salary}</p>
                                    <button
                                        onClick={() => setSelectedJob(job)}
                                        className="px-4 py-2 bg-yellow text-white font-bold text-base rounded transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-105 active:scale-70"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {selectedJob && <JobsModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
        </div>
    );
};

export default JobList;
