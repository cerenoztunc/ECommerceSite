import { useToast,Button } from '@chakra-ui/react';

export function WarningToast() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Please login to order.',
            status: 'error',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Add to basket
      </Button>
    )
};