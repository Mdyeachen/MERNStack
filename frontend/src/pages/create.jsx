import { Box, Container, Heading, useColorModeValue, VStack, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product"
import { useToast } from '@chakra-ui/react'

function Create() {
  const [ newProduct, setNewProduct ] = useState({
    name : "",
    price : "",
    image : ""
  })

  const toast = useToast()
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success , message } = await createProduct(newProduct)

    if (!success) {
    toast({
      title: "Error",
      description: message,
      status: "error",
      isClosable: true
    })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      })


      setNewProduct({
        name : "",
        price : "",
        image : ""
      })
    }
  }

  

  return (
    <Container maxW={"1140px"} minH="86vh" px={"4"} display="flex" alignItems={"center"} justifyContent={"center"}>
        <Container maxW={"container.sm"}>
            <VStack spacing={"8"}>
              <Heading as={"h1"} size="3xl" textAlign={"center"} mb={"8"}>Create New Product</Heading>
            
            <Box w="full" bg={useColorModeValue("gray.100", "gray.900")} p={"10"} rounded={"lg"} shadow={"md"}>
              <VStack spacing={"4"}>
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name : e.target.value})}
                />

                <Input
                  placeholder="Product Price"
                  name="price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price : e.target.value})}
                />

                <Input
                  placeholder="Product Image Url"
                  name="image"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image : e.target.value})}
                />

                <Button bg="#096B68" color="#fff" w="full" onClick={handleAddProduct}  _hover={{ bg: "#064F4D" }}>
                  Add Product
                </Button>
              </VStack>
            </Box>
            
            </VStack>
        </Container>
    </Container>
  )
}

export default Create
