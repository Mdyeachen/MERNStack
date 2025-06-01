import { Box, Heading, Image, Text, HStack, Button, useColorModeValue, useToast, Modal,ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, useDisclosure, ModalFooter } from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { useProductStore } from '../store/product';
import { useState } from 'react';

function ProductCard({ product }) {
  const bgColor = useColorModeValue("#ffffff", "#293140" )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ updateProduct, setUpdateProduct ] = useState(product)
  const { deleteProduct, updateProducts } = useProductStore();

  const toast = useToast()
  const handleDeleteProduct = async (pid) => {
      const { success , message } = await deleteProduct(pid);
      if(!success) {
        toast({
          title : "Error",
          status : "error",
          description : message,
          isClosable : true
        })
      } else {
        toast({
          title : "Success",
          status : "success",
          description : message,
          isClosable : true
        })
      }
  }



  // update poduct
  const handleUpdateProduct = async (pid, updateProduct) => {
    const result = await updateProducts(pid, updateProduct);
    const { success, message } = result || {};

    if(!success) {
        toast({
          title : "Error",
          status : "error",
          description : message,
          isClosable : true
        })
      } else {
        toast({
          title : "Success",
          status : "success",
          description : message,
          isClosable : true
        })
      }
      onClose();
  }
  return (
    <>
    <Box
    shadow={"lg"}
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s"
    bg={bgColor}
    p="5"
    _hover={{transform: "translateY(-5px)", shadow : "xl"}}>
        <Image src={product.image} alt={product.name} h="auto" marginInline="auto" objectFit="contain" />

        <Box p={4}>
            <Heading as="h3" size="md" mb="2">
                {product.name}
            </Heading>

            <Text fontWeight="bold" fontSize="xl"  md={4}>
                ${product.price}
            </Text>
        </Box>

        <HStack>
          <Button onClick={() => handleDeleteProduct(product._id)}>
            <MdDeleteForever />
          </Button>
          <Button onClick={onOpen}>
            <IoIosCreate />
          </Button>
        </HStack>
    </Box>

     <Modal 
     isOpen={isOpen}
      onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <VStack spacing={"4"}>
              <Input value={updateProduct.name} onChange={(e) => setUpdateProduct({... updateProduct, name : e.target.value})} placeholder="Product Name" name="name" />
              <Input value={updateProduct.price} onChange={(e) => setUpdateProduct({... updateProduct, price : e.target.value})} placeholder="Product Price" name="price" />
              <Input value={updateProduct.image} onChange={(e) => setUpdateProduct({... updateProduct, image : e.target.value})} placeholder="Product Image Url" name="image"/>
            </VStack>
          </ModalBody>
          <ModalFooter display="flex" gap="5">
            <Button bg="#096B68" color="#fff" _hover={{ bg: "#064F4D" }} onClick={() => handleUpdateProduct(product._id, updateProduct)}>Update</Button>
            <Button bg="#E55050" color="#fff" _hover={{ bg: "#CB0404" }} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
     </Modal>
    </>
  )
}

export default ProductCard;
