import React from 'react';
import {Link} from "react-router-dom";
import {useBasket} from '../../contexts/BasketContext';
import {Alert, Button, Image,Box,Grid,Text} from "@chakra-ui/react";

function Basket() {
    const {items, removeFromBasket} = useBasket();

    const total = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <div>
      {items.length < 1 && <Alert status="warning">You have not any items in your basket!</Alert>}
      {
          items.length > 0 && <div>
            
                    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                {
                    items.map((item) => (
                        <div>
                        <Box w="100%"  key={item._id}>
                            <Link to={`/product/${item._id}`}><Text fontSize={18} fontStyle="normal" fontFamily="cursive">{item.title} - {item.price} TL</Text>
                                <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
                            </Link>

                            <Button mt={2} size="sm" colorScheme="teal" onClick={
                                ()=>removeFromBasket(item._id)}>Remove from basket
                            </Button>
                            
                        </Box>
                        </div>  
                    ))
                }
                    </Grid>
                    <Box mt={10}>
                         <Button fontSize="22">Total: {total}</Button>
                    </Box>
          </div>
      }
    </div>
  )
}

export default Basket;
