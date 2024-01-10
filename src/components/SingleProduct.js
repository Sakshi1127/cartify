import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}/>
        <Card.Body>
          <Card.Subtitle style ={{paddingBottom:10}}>
            <span>Rs. {prod.price}</span>
            {prod.fastDelivery?(
              <div>Fast Delivery</div> 
            ):(
              <div>4 Days of Delivery</div>
            )
          }
           <Rating rating={prod.ratings}/>
          </Card.Subtitle>
          <Button variant="danger">
            Remove from Cart
          </Button>
          <Button disabled={!prod.inStock}>
           {!prod.inStock ? "Out of Stock":"Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
     
    </div>
  )
}

export default SingleProduct
