import  {useQuery } from 'react-query';
import {useParams} from 'react-router-dom';
import { fetchProduct} from "../../api";
import {Center, Box, Text, Button} from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';

import {useBasket} from '../../contexts/BasketContext';

function ProductDetail() {
    const { product_id } = useParams();
    const {addToBasket, items} = useBasket();

    const { isLoding, isError, data } = useQuery(['product', product_id], 
        () => fetchProduct(product_id)
    );

    if(isLoding) {
        return <div>Loading...</div>;
    }
    if(isError) {
        return <div>Error</div>;
    }
    const findBasketItem = items.find((item) => item._id === product_id);
    const images = data.photos.map((url) => ({original:url}));

  return (
    <div>
     <Center >
      <Text as="h1" fontSize="4xl" color="purple" >
        {data.title}
      </Text>
      </Center>
      <Center>
      <Text color="gray.400">
          {moment(data.createdAt).format("DD/MM/YYYY")}
      </Text>
      </Center>
      <Center>
      <Text fontSize="2xl">
          {data.description}    
      </Text>
      </Center>
        <Box margin="10">
            <ImageGallery items={images} showThumbnails={false} sizes="120px, 193px, 278px"></ImageGallery>
        </Box>
        <Center> 
            <Button colorScheme={findBasketItem ? 'teal' : "pink"} size="lg" onClick={() => addToBasket(data, findBasketItem)}>
                {findBasketItem ? 'Remove from basket': 'Add to basket'}
                </Button>

        </Center>

    </div>
  );
}

export default ProductDetail;
