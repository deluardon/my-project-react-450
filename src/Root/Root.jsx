// import React from 'react';

import { Outlet } from "react-router-dom";
// import Home from "../Components/Home";
import Navbar from "../Page/Navber/Navbar";

const Root = () => {
    return (
        <div>
            {/* <Home ></Home> */}
            <Navbar></Navbar>
            <Outlet to="/"></Outlet>
            
        </div>
    );
};

export default Root;