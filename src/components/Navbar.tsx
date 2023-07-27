"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
   const [scroll, setScroll] = useState(0);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY);
      });

      return () => {
         window.removeEventListener("scroll", () => {
            setScroll(window.scrollY);
         });
      };
   }, [scroll]);
   return (
      <div
         className={`flex flex-row items-center justify-between h-[60px] bg-transparent sticky top-0 ${
            scroll > 0 && "bg-black/80"
         }`}
      >
         <div className="logo">
            <span>Logo</span>
         </div>
         <div className="nav-list">
            <ul className="flex flex-row items-center gap-x-5">
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               <li>Blog</li>
            </ul>
         </div>
         <div className="right-bar">User</div>
      </div>
   );
};

export default Navbar;
