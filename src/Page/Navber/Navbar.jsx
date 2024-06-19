// import React from 'react';

import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <section className="">
        <div className="navbar justify-between  bg-white bg-clip-border text-gray-700 py-7 shadow-lg">
            <div>
            <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-black" : ""
                }>
                <div>
                  <h1 className="text-3xl">Donation</h1>
                  <h2 className="text-xl">Campaign</h2>
                </div>
              </NavLink>
            </div>
            <div className="gap-5">
                
              <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }>
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }>
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }>
                Statistics
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500" : ""
                }>
                Login
              </NavLink>
            </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
