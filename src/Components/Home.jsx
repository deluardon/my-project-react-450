// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "../Page/Banner/Banner";
import Phones from "../Page/Phones/Phones";



const Home = () => {
    const phones=useLoaderData();
    console.log(phones);
    return (
     <>
    <Banner></Banner>
    <div className="container  mx-auto mt-12 grid text-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {
            phones.map(phone=><Phones key={phone.id} phone={phone}></Phones>)
        }
    </div>
     </>
    );
};

export default Home;