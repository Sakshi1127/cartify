import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar,Badge } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <Navbar bg="dark" variant ="dark" style={{height:70}}>
    <Container>
        <Navbar.Brand>
           <Link to="/">Cartify</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width:500}} placeholder="Search.." className='m-auto'/>
        </Navbar.Text>

        <Nav>
            <Dropdown alignRight>
               <Dropdown.Toggle variant="success">
               <FaShoppingCart color="white" fontSize="25px"/>
                   <Badge bg="none">{10}</Badge>
               </Dropdown.Toggle>
            

            <Dropdown.Menu style={{minWidth:350}}>
                <span style={{padding:10}}>Cart is empty</span>
            </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Container>
   </Navbar>
  )
}

export default Header
