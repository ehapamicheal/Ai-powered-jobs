// api route.jsx

// export async function GET(req) {
//     const url = "https://jsearch.p.rapidapi.com/search?query=Frontend Developer";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": '77f0448d4cmshcc6d5865f7b5afap19e3c1jsn2a1e2c4653b6', 
//          'x-rapidapi-host': 'linkedin-jobs-api2.p.rapidapi.com'
//       },
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       return Response.json(data);
//     } catch (error) {
//       return Response.json({ error: "Failed to fetch jobs" }, { status: 500 });
//     }
//   }
  


// import { NextResponse } from "next/server";

// export async function GET() {
//   const url = "https://linkedin-jobs-api2.p.rapidapi.com/active-jb-7d";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "77f0448d4cmshcc6d5865f7b5afap19e3c1jsn2a1e2c4653b6", 
//       "X-RapidAPI-Host": "linkedin-jobs-api2.p.rapidapi.com"
//     }
//   };

//   try {
//     const response = await fetch(`${url}?query=Frontend Developer in Nigeria`, options);
//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
//   }
// }


// route.jsx
// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://linkedin-jobs-api2.p.rapidapi.com/active-jb-7d',
//   params: {
//     title_filter: '"Data Engineer"',
//     location_filter: '"United States"'
//   },
//   headers: {
//     'x-rapidapi-key': '77f0448d4cmshcc6d5865f7b5afap19e3c1jsn2a1e2c4653b6',
//     'x-rapidapi-host': 'linkedin-jobs-api2.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// export async function GET() {
//   const filePath = path.join(process.cwd(), "data", "jobs.json");

//   try {
//     const jsonData = fs.readFileSync(filePath, "utf8");
//     const jobs = JSON.parse(jsonData);
//     return NextResponse.json(jobs, { status: 200 });
//   } catch (error) {
//     console.error("Error loading jobs.json:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });


//   }
// }

// api/jobs/route.js
// export async function GET() {
//   const jobs = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       company: "Tech Corp",
//       location: "Remote",
//       salary: "$70,000",
//     },
//     {
//       id: 2,
//       title: "Backend Developer",
//       company: "Code Labs",
//       location: "New York",
//       salary: "$80,000",
//     },
//   ];

//   return new Response(JSON.stringify(jobs), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }



// import { promises as fs } from "fs";
// import path from "path";

// export async function GET() {
//   try {
//     // Read the jobs data from the JSON file
//     const filePath = path.join(process.cwd(), "data", "jobs.json");
//     const jsonData = await fs.readFile(filePath, "utf-8");
//     const jobs = JSON.parse(jsonData);

//     return new Response(JSON.stringify(jobs), {
//       status: 200,
//       headers: { "Content-Type": "application/json" }
//     });
//   } catch (error) {
//     console.error("Error reading jobs data:", error);
//     return new Response(JSON.stringify({ error: "Failed to load jobs" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" }
//     });
//   }
// }


// export async function GET() {
//   try {
//     const jobs = await import("@/data/jobs.json").then((module) => module.default);
    
//     return new Response(JSON.stringify(jobs), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error reading jobs data:", error);
//     return new Response(JSON.stringify({ error: "Failed to load jobs" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


// export async function GET() {
//   try {
//     console.log("API Request received at /api/jobs"); // Debugging log

//     const jobs = [
//       {
//         id: 1,
//         title: "Frontend Developer",
//         company: "Tech Corp",
//         location: "Remote",
//         salary: "$70,000",
//       },
//       {
//         id: 2,
//         title: "Backend Developer",
//         company: "Code Labs",
//         location: "New York",
//         salary: "$80,000",
//       },
//     ];

//     return new Response(JSON.stringify(jobs), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("API Error:", error); 
//     return new Response(JSON.stringify({ error: "Failed to load jobs" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


// app/api/route.js
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // Get the path to the jobs.json file
    const filePath = path.join(process.cwd(), "app/data/jobs.json");

    // Read the file
    const jsonData = await fs.readFile(filePath, "utf-8");

    // Parse JSON
    const jobs = JSON.parse(jsonData);

    return new Response(JSON.stringify(jobs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error loading jobs:", error);
    return new Response(JSON.stringify({ error: "Failed to load jobs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
