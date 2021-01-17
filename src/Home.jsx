import React from "react";
import web from "../src/Image/1571654815_jt9HKT_thai_tourism.jpg";
import{NavLink} from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return(
        <>
       <Common 
       name="Enjoy with" 
       imgsrc={web} 
       visit="/package" 
       btname="Get Started"/>
        </>
    );
};
export default Home;