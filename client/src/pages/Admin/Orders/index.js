import React from 'react';

import {NavLink, Link} from 'react-router-dom';

import {useQuery} from 'react-query';
import {fetchOrders} from '../../../api';

import {Table, Thead, Tbody,Tr,Th,Td,TableCaption,Text } from '@chakra-ui/react';

function Orders() {
  const {isLoading, isError, data, error} = useQuery('admin:orders', fetchOrders);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error {error.message}</div>
  }

  console.log(data);

  return (
    <div>
      <Text fontSize="2xl" p={5}>Orders</Text>
      <Table variant='simple' colorScheme='blue'>

      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>USER</Th>
          <Th>ADDRESS</Th>
          <Th isNumeric>ITEMS</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.map((item) => (
            <Tr key={item._id}>
                <Td><NavLink to={`/admin/orders/${item._id}`}>{item.user.email}</NavLink></Td>
                <Td><Link to={`/admin/orders/${item._id}`}>{item.adress}</Link></Td>
                <Td isNumeric><Link to={`/admin/orders/${item._id}`}>{item.items.length}</Link></Td>
            </Tr>
          ))
        }
   
      </Tbody>
      </Table>
    </div>
  )
}

export default Orders;
