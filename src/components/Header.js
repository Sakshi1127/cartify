import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar,Badge, Button } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {CartState} from '../context/Context'
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const {
        state:{cart},
        dispatch,
        productDispatch
    }=CartState();


  return (
   <Navbar bg="dark" variant ="dark" style={{height:60}}>
    <Container>
        <Navbar.Brand>
           <Link to="/">Cartify</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width:300}} placeholder="Search.." className='m-auto'   onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}/>
        </Navbar.Text>

        <Nav>
            <Dropdown alignRight>
               <Dropdown.Toggle variant="success">
               <FaShoppingCart color="white" fontSize="25px"/>
                   <Badge bg="none">{cart.length}</Badge>
               </Dropdown.Toggle>
            

               <Dropdown.Menu 
    style={{ 
        minWidth: 300, 
        right: 'auto', 
        left: "-198px",
        '@media (max-width: 650px)': {
            position: 'absolute',
            minWidth: "200px",
            top: '100%',
            left: "-178px",
            right: 0,
        }
    }}
>

                {cart.length >0 ?(
                    <>
                    {cart.map((prod)=>(
                        <sapn className='cartitem' key={prod.id}>
                            <img src={prod.image}
                            className='cartItemImg'
                            alt={prod.name}/>
                            <div className='cartItemDetail'>
                                <span>{prod.name}</span>
                                <sapn>Rs. {prod.price.split(".")[0]}</sapn>
                            </div>
                            <AiFillDelete frntSize="20px"
                            style={{cursor:"pointer"}}
                            onClick={()=>dispatch({
                                type:"REMOVE_FROM_CART",
                                payload:prod
                            })
                        }/>
                        </sapn>
                    ))}
                    <Link to="/cart">
                        <Button style={{width:"95%",margin:"0 10px"}}>
                            Go to Cart
                        </Button>
                    </Link>
                    </>
                ):(
                 <span style={{padding:10}}>Cart is empty</span>
                )}
              
            </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Container>
   </Navbar>
  )
}

export default Header
