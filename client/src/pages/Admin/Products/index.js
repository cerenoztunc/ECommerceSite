import {useMemo} from 'react';
import {useQuery, useMutation, useQueryClient} from 'react-query';
import {fetchProductList, deleteProduct} from '../../../api';

import {Table, Popconfirm} from 'antd';
import {Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
function Products() {
  //bir vermek çekmek query işlemidir. bu yüzden ürünleri listelemek için useQuery kullandık..
 const {isLoading, isError, data, error} = useQuery('admin:products', fetchProductList);
 //delete update işlemleri mutation(manipülasyon) işlemleridir. bu yüzden delete için useMutation kullandık..
 const deleteMutation = useMutation(deleteProduct, {
    //ürün silinince yukarıdaki useQuery'de verdiğimiz ismi kullanarak baştan render edilmesini sağladık.. 
    onSuccess : () => queryClient.invalidateQueries('admin:products')
 });

 const queryClient = useQueryClient();

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
              deleteMutation.mutate(record._id, {
                onSuccess: () => {
                  alert("Deleted!");
                },
                onError: () => {
                  alert("Failed! Please try again.")
                }
              })
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
