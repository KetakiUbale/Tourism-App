import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import {NavLink} from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

const Package = () => {
    return(
        
        <>

        
        <div className="my-5">
           <h1 className="text-center"><b><i><u>Our Packages</u></i></b></h1>
        </div>
        <div className="container-fluid mb-5">
                <div className='row'>
                  <div className="col-10 mx-auto">
                  <div className="row gy-4">
                  {Sdata.map((val, ind) => {
                          return <Card key imgsrc={val.imgsrc} title={val.title} dis={val.dis} />
                      })}
                      
                </div>
                </div>
            </div>
        </div>
       </>
        
        
    );
};
export default Package;