import { Box, Heading, Image, Text } from '@chakra-ui/react'

function ProductCard({ product }) {
  return (
    <Box
    shadow={"lg"}
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{transform: "translateY(-5px)", shadow : "xl"}}>
        <Image src={product.image} alt={product.name} h="full" objectFit="contain" />

        <Box p={4}>
            <Heading as="h3" size="md" mb="2">
                {product.name}
            </Heading>

            <Text fontWeight="bold" fontSize="xl"  md={4}>
                ${product.price}
            </Text>
        </Box>
    </Box>
  )
}

export default ProductCard;
