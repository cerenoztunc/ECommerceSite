import React from 'react';
import {useParams} from 'react-router-dom';
import {fetchProduct} from '../../../api';
import {useQuery} from "react-query";
import { fetchOrder} from '../../../api';

import {Table, Thead, Tbody,Tr,Th,Td,TableCaption,Text } from '@chakra-ui/react';

function OrderDetail() {
    const {order_id} = useParams();
    console.log(order_id);
    console.log(fetchOrder(order_id).then((val) => {
console.log("orderdetail",val);
    }));
    const {isLoading, isError, data, error} = useQuery('admin:order', fetchOrder(order_id).then((orderDetail) => {
        data = orderDetail;
    }));

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error {error.message}</div>
  }

  console.log(data);
  const formattedCreatedDate = new Date(data.createdAt).toLocaleDateString('en-US');
  const formattedCreatedTime = new Date(data.createdAt).toLocaleTimeString('en-US');
  const createdDateTime = formattedCreatedDate + ' ' + formattedCreatedTime;
  
  return (
    <div>
      <Text fontSize="3xl" color='Highlight'>Order Details</Text>
      <Table variant='simple' colorScheme='blue'>

      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>ORDER DATE</Th>
          <Th>TITLE</Th>
          <Th isNumeric>PRICE</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            
            data.items.map((item) => (
            <Tr key={item._id}>
                <Td>{createdDateTime}</Td> 
                <Td>{item.title}</Td>
                <Td isNumeric>{item.price}</Td>
            </Tr>
          ))
        }
   
      </Tbody>
      </Table>
    </div>
  )
}

export default OrderDetail;

