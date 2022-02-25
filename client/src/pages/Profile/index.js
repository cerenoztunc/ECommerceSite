import React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {Tag, Text, Divider, Avatar,Box,Icon, Center  } from '@chakra-ui/react';


function Profile() {
    const {user} = useAuth();
  return (
    <div>
        <Center mb="3">
            <Avatar bg='teal.500' /> <Text fontSize="25">Profile</Text>
        </Center>
        
        <Divider/>
        <Box>
            <Center>
                <Icon viewBox='0 0 200 200' color='purple.500'>
                <path fill='currentColor' d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'/>
                </Icon> 
                <Tag mt={3} mr="100" fontStyle="italic">Role: {user.role} </Tag> 
            </Center> 
            <Center>
                <Icon viewBox='0 0 200 200' color='purple.500'>
                <path fill='currentColor' d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'/>
                </Icon> 
                <Tag mt={2} fontStyle="italic">Email: {user.email}</Tag>      
            </Center>
        </Box>
    </div>
  )
}

export default Profile;
