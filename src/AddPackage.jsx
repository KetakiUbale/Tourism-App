import React from 'react';
import {NavLink} from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const AddPackage=()=>{
    return(
        <div>
        <div className="my-5">
           <h1 className="text-center">Add Packages </h1>
       </div>
       <div>
       <div className="container contact_div">
           <div className="row">
           <div className="col-md-6 col-10 mx-auto"></div>
        <Form>
            <FormGroup>
                <Label>Package Name</Label>
                <Input type="text" placeholder="Enter Package Name"></Input>
                <Label>Package Details</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button type="submit">Submit</Button>
            <NavLink to="/" className="btn btn-danger ml-2">Cancel</NavLink>
        </Form>
        </div>
        </div>
        </div></div>
    )
}
export default AddPackage;