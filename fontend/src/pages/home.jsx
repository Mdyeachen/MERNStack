import { Container, VStack, Heading, SimpleGrid, Box, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"
import ProductCard from "../component/productCard"
function Home() { 

  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])

  console.log(products)


  return (
    <Container maxW={"1140px"} px={"4"}>
        <Container maxW={"container.xl"}>
            <VStack spacing={"8"}>
              <Heading 
              as={"h1"} 
              size="3xl" 
              textAlign={"center"} 
              mb={"8"}
              bgGradient='linear(to-l, #129990, #096B68)'
              bgClip='text'>
                Current Products
              </Heading>
            </VStack>

            <SimpleGrid columns={{
              base : 1,
              md : 2,
              lg : 3
            }} spacing={10} w="full">
              {products.map((product) => {
                return <ProductCard key={product._id} product={product} />
                
              })}
            </SimpleGrid>


            <Heading 
              as={"h2"} 
              size="md" 
              textAlign={"center"} 
              mb={"8"}
              bgGradient='linear(to-l, #129990, #096B68)'
              bgClip='text'
             >
                No Product Found .  Click to 
                <Link to="/create">
                  <Text 
                  _hover={{
                  textDecoration: "underline",
                  }}>
                    Create New Product
                  </Text>
                </Link>
              </Heading>


        </Container>
    </Container>
  )
}

export default Home
