import React from 'react';
import{ NavLink }from 'react-router-dom';
import{
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container,
    NavLink
} from 'reactstrap';

export const Heading=()=>{
    return(
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/"></NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink className="btn btn-primary" to="/add">Add User</NavLink>
                </NavItem>
            </Nav>
            </Container>

        </Navbar>
    )
}
export default Heading;