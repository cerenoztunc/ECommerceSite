import React from 'react';
import {Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert} from '@chakra-ui/react';
import {useFormik} from 'formik';
import validationSchema from './validations';
import {fetchLogin} from '../../../api';
import {useAuth} from '../../../contexts/AuthContext';

function Signin() {

const {login} = useAuth();

  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema,
    onSubmit: async(values,bag) => {
      try{
        const loginResponse = await fetchLogin({
          email: values.email, 
          password:values.password});

          login(loginResponse);
          window.location.href = '/profile';
        console.log(loginResponse);

      }catch(e){
        bag.setErrors({general:e.response.data.message});
      }
    },
    
    })
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading textColor="teal">Signin</Heading>
          </Box>

          <Box my={5}>
            {
              formik.errors.general && (
                <Alert status='error'>
                  {formik.errors.general}

                </Alert>
              )
            }
          </Box>

          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel textColor="teal">Email</FormLabel>
                <Input 
                name='email' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
                />
                <Box textColor="red">{formik.errors.email}</Box>
              </FormControl>
              <FormControl mt="4">
                <FormLabel textColor="teal">Password</FormLabel>
                <Input 
                name='password' 
                type="password" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && formik.errors.password}
                />
                <Box textColor="red">{formik.errors.password}</Box>
              </FormControl>
              
              <Button mt={4} width="full" type='submit' colorScheme="purple"> Signin</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin;
