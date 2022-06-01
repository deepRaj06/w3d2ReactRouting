import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8002/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    } else {
      setProduct("Product does not exist");
    }
  }, [id]);
  return (
    <div>
      <Box border="1px solid grey" bg="white" w="20%" p={4} color="grey" margin='auto'>
        <Flex>
          <Box border="1px solid grey" bg="white" w="100%" p={2} color="grey">
            {id}.
          </Box>
          <Box border="1px solid grey" bg="white" w="100%" p={2} color="grey">
          <div>{product.name}</div>
          </Box>
          <Box border="1px solid grey" bg="white" w="100%" p={2} color="grey">
           <div>{product.price}</div>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Product;
