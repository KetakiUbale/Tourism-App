import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import {Switch, Route, Redirect} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Package from "./Package";
import Navbar from "./Navbar";
import Footer from "./Footer";
import  AddPackage  from "./AddPackage";
const App = () => {
    return  (
        <>
        <Navbar/>
        <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/package" component={Package}/>
            <Route exact path="/add" component={AddPackage}/>
            
           
            <Redirect to="/"/>
        </Switch>
        <Footer />
        </>
    );
};
export default App;