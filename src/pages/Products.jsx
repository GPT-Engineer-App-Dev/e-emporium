import { Box, SimpleGrid, Image, Text, Button, VStack, Heading, Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, category: "smartphone", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "laptop", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: 199, category: "smartwatch", image: "/images/smartwatch.jpg" },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "category") {
      setCategory(value);
    } else if (name === "priceRange") {
      const [min, max] = value.split("-");
      setPriceRange([parseInt(min), parseInt(max)]);
    }
  };

  useEffect(() => {
    setFilteredProducts(
      sampleProducts.filter((product) => {
        const matchesCategory = category ? product.category === category : true;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesCategory && matchesPrice && product.name.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  }, [searchQuery, category, priceRange]);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">Products</Heading>
      <InputGroup mb={6}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input type="text" placeholder="Search products" value={searchQuery} onChange={handleSearchChange} />
      </InputGroup>
      <Box mb={6}>
        <Select placeholder="Select category" name="category" onChange={handleFilterChange}>
          <option value="smartphone">Smartphone</option>
          <option value="laptop">Laptop</option>
          <option value="smartwatch">Smartwatch</option>
        </Select>
        <Select placeholder="Select price range" name="priceRange" onChange={handleFilterChange} mt={4}>
          <option value="0-200">$0 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500-1000">$500 - $1000</option>
        </Select>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} spacing={2} align="start">
              <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
              <Text>${product.price}</Text>
              <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;