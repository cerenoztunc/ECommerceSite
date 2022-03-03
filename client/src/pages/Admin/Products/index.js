import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {fetchProductList} from '../../../api';

import {Table, Popconfirm} from 'antd';
import {color, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
function Products() {
 const {isLoading, isError, data, error} = useQuery('admin:products', fetchProductList);

//table items
 const columns = useMemo(() => {
   return [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title:'Actions',
      key:'action',
      render: (text, record) => (
        <>
          <Link to={`/admin/products/${record._id}`} >Edit</Link>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => {
              alert("Deleted!");
            }}
            onCancel={() => console.log('canseled')}
            okText="Yes"
            cancelText = "No"
            placement="left">
            <a style={{marginLeft:10, color:'red'}} href='/#'>Delete</a>
          </Popconfirm>
  
        </>
      )
    }
  ];
 })



  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error {error.message}</div>
  }
  console.log(data);
  
 

  return (
    <div>
      <Text fontSize='2xl' p={5}>Products</Text>
      <Table dataSource={data} columns={columns} rowKey='_id'></Table>
    </div>
  )
}

export default Products;
