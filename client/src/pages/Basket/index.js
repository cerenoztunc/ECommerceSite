import React, {useRef,useState} from 'react';
import {Link} from "react-router-dom";
import {useBasket} from '../../contexts/BasketContext';
import {Alert, Button, Image,Box,Grid,Text,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
FormControl,
FormLabel,
Input, 
Textarea,
useToast
} from "@chakra-ui/react";
import { postOrder } from '../../api';

function Basket() {
    const {items, removeFromBasket, emptyBasket} = useBasket();
    const { isOpen, onOpen, onClose } = useDisclosure();

    //toast
    const toast = useToast()

    //modal
    const [address, setAddress] = useState('');
    const initialRef = React.useRef();
    const handleSubmitForm = async () => {
        const itemIds = items.map((item) => item._id);

        const input = {
            address,
            items: JSON.stringify(itemIds)
        }
        const response = await postOrder(input);
        emptyBasket();
        onClose();
        toast({
            title: 'Your order has been received successfully.',
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        console.log(response);
    }

    const total = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <div>
      {items.length < 1 && <Alert status="warning">You have not any items in your basket!</Alert>}
      {
          items.length > 0 && <div>
              <Text fontSize={35} color="purple" fontFamily="fantasy">Basket</Text>
            
                    <Grid templateColumns='repeat(4, 1fr)' gap={4} mt="5">
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
                    <Button mt={2} size="lg" colorScheme="orange" onClick={onOpen}>Order</Button>
                    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Order</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <Textarea 
                                        ref={initialRef} 
                                        placeholder='Address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                 Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
          </div>
      }
    </div>
  )
}

export default Basket;
