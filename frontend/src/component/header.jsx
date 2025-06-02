import { Box, Container, Flex, Text, HStack, Button, useColorMode, useColorModeValue  } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { WiDayCloudy } from "react-icons/wi";
import { MdNightsStay } from "react-icons/md";




export default function Header() {

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
        <Box w="100%" min-h="20rem" bg={useColorModeValue("gray.100", "gray.900")}>
          <Container maxW={"1140px"} px={"4"} py="5">
              <Flex 
              alignItems={"center"} 
              justifyContent={"space-between"}
              flexDir={{
                base: "column",
                sm : "row"
              }}>
                <Link to="/" display={"flex"} gap={"5px"} justifyContent={"center"} alignItems={"center"}>
                  <Flex gap={"5px"} justifyContent={"center"} alignItems={"center"} fontSize='xl'
                      fontWeight='bold'>
                      <Text
                      bgGradient='linear(to-l, #129990, #096B68)'
                      bgClip='text'
                    >Product Store</Text>
                    <FaShoppingCart color={"#096B68"} />
                  </Flex>
                </Link>
              
              
              <HStack spacing={"2"} alignItems={"center"}>
                <Link to="/create">
                  <Button>
                    <IoIosCreate />
                  </Button>
                </Link>

                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <WiDayCloudy /> : <MdNightsStay />}
                </Button>
              </HStack>
              </Flex>

          </Container>
        </Box>
    </div>
  )
}
