import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Container marginTop="4rem" border="1px solid grey" centerContent>
        <Link to="/">Home</Link>
        <Button colorScheme="blue" variant="ghost">
          <Link to="/products">Products</Link>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
