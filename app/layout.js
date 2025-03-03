"use client"
import "./globals.css";
import SideBar from '@/app/components/SideBar';




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
      >
        <div className="flex box-border">
          <SideBar />
          {children}
        </div>

      </body>
    </html>
  );
}


