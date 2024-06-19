import { Box, Image, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", description: "Latest model smartphone with all the newest features.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", description: "High-performance laptop for all your computing needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", description: "Smartwatch with fitness tracking and notifications.", image: "/images/smartwatch.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="xl">{product.name}</Heading>
        <Image src={product.image} alt={product.name} />
        <Text fontSize="lg">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/products" colorScheme="teal">Back to Products</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;