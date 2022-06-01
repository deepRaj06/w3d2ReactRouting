import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch("http://localhost:8002/products");
      let data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/*  */}
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Display Products</TableCaption>
          <Thead>
            <Tr>
              <Th>Serial No.</Th>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
              <Th>Product Details</Th>
            </Tr>
          </Thead>

          <Tbody>
            {products.map((prod) => (
              // <div key={prod.id}>
                <Tr key={prod.id}>
                  <Td>{prod.id}</Td>
                  <Td>{prod.name}</Td>
                  <Td isNumeric>{prod.price}</Td>
                  <Td>
                    <Link to={`/products/${prod.id}`}>
                      <Button colorScheme='blue'>Details</Button>
                    </Link>
                  </Td>
                </Tr>
              // </div>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Outlet></Outlet>

      {/*  */}
      {/* Products:{" "}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1fr)" }}>
        <div>
          {products.map((prod) => (
            <div key={prod.id}>
              {prod.id}. {prod.name} - Cost: {prod.price}
              <Link to={`/products/${prod.id}`}>
                <button>Details</button>
              </Link>
            </div>
          ))}
        </div>
        <Outlet></Outlet>
      </div> */}
    </div>
  );
};

export default Products;
