import { Box, SimpleGrid, Image, Text, Button, VStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg" },
];

const Products = () => (
  <Box p={4}>
    <Heading as="h2" size="xl" mb={6} textAlign="center">Products</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {sampleProducts.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
          <VStack p={4} spacing={2} align="start">
            <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
            <Text>{product.price}</Text>
            <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;