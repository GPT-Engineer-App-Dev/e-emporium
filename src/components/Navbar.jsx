import { Box, Flex, Link, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Electronics Store</Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/products" colorScheme="teal" variant="outline" mr={4}>Products</Button>
          <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline">Contact</Button>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input type="text" placeholder="Search products" value={searchQuery} onChange={handleSearchChange} />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;