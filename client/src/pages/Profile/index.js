import {useAuth} from '../../contexts/AuthContext';
import {Tag, Text, Divider, Avatar,Box,Icon, Center, Button  } from '@chakra-ui/react';



function Profile() {
   
    const {user, logout} = useAuth();
    
    const handleLogout = async () => {
       await logout(() => {
        window.location.href = '/';
       });
    };
  return (
    <div>
        <Center mb="3">
            <Avatar bg='teal.500' /> <Text fontSize="25">Profile</Text>
        </Center>
        
        <Divider/>
        <Box>
            {/* <code>
                {JSON.stringify(user)}
            </code> */}
            <Center>
                <Tag mb="2" mt="2">Role: {user.role}</Tag>
            </Center>
            <Center>
                <Tag>Email: {user.email}</Tag>
            </Center>
            
            <Center>
                <Button colorScheme="purple" variant="solid" mt={8} onClick={handleLogout}>
                    Logout
                </Button>
            </Center>
        </Box>
       
    </div>
  )
}

export default Profile;
