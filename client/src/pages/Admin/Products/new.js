import React from 'react';
import { message } from 'antd';
import {postProduct} from '../../../api';
import {useQuery, useMutation, useQueryClient} from "react-query";

import {Formik, FieldArray} from 'formik';
import {Text, Box, FormControl, FormLabel, Input, Textarea,Button} from '@chakra-ui/react';

import validationSchema from './validations';

function NewProduct() {
    const queryClient = useQueryClient();
    const newProductMutation = useMutation(postProduct, {
        onSuccess: () => queryClient.invalidateQueries('admin:products')
    });
 

    const handleSubmit = async (values, bag) => {
        console.log(values);
        message.loading({content:'Loading...', key:'product_add'});

        const newValues = {
            ...values,
            photos: JSON.stringify(values.photos)
        }

        
        newProductMutation.mutate(newValues,{
            onSuccess: () => {
                console.log('success');
                message.success({
                    content: 'The product successfully added.', 
                    key: 'product_add',
                    duration: 2 
                });
            }

        });

    }

  return (
    <div>
      <Text fontSize="3xl" color='Highlight'>Add New Product</Text>
      <Formik 
        initialValues={{
          title: "",
          description:"",
          price: "",
          photos:[],
      }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
            ({handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting}) => 
                <>
                    <Box>
                        <Box my="5" textAlign='left'>
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel>Title</FormLabel>
                                    <Input
                                        name='title'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        disabled={isSubmitting}
                                        isInvalid={touched.title && errors.title}
                                    />
                                    {touched.title && errors.title && (<Box textColor="red">{errors.title}</Box>)}
                                    
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea
                                        name='description'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        disabled={isSubmitting}
                                        isInvalid={touched.description && errors.description}
                                    />
                                    {
                                        touched.description && errors.description && (
                                            <Box textColor="red">{errors.description}</Box>
                                        )
                                    }
                                    
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Price</FormLabel>
                                    <Input
                                        name='price'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        disabled={isSubmitting}
                                        isInvalid={touched.price && errors.price}
                                    />
                                    {touched.price && errors.price && (<Box textColor="red">{errors.price}</Box>)}
                                    
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Photos</FormLabel>
                                    <FieldArray
                                        name='photos'
                                        render={(arrayHelpers) => (
                                            <div>
                                                {
                                                    values.photos && values.photos.map((photo, index) => (
                                                        <div key={index}>
                                                             <Input
                                                             //birden fazla foto olacağı için name bu şekilde verilir
                                                                name={`photos.${index}`} 
                                                                value={photo}
                                                                disabled={isSubmitting}
                                                                onChange={handleChange}
                                                                width='3xl'
                                                             /> 
                                                             <Button 
                                                                ml='4' 
                                                                type='button' 
                                                                colorScheme='red'
                                                                onClick={() => arrayHelpers.remove(index)}
                                                            >Remove</Button>
                                                        </div>
                                                    ))}
                                                    <Button mt={5} onClick={() => arrayHelpers.push('')} colorScheme='twitter'>
                                                        Add a Photo
                                                    </Button>
                                            </div>
                                        )}  
                                    
                                    
                                    />

                                </FormControl>
                                <Button mt={4} width='full' type='submit' isLoading={isSubmitting} colorScheme='blue'>Save</Button>
                            </form>
                            
                        </Box>
                    </Box>
                </>
            
        }

      </Formik>
    </div>
  )
}

export default NewProduct;



