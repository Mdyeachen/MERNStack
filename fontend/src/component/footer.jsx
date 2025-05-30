import { Box, Container } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
export default function Footer() {
  return (
    <>
      <Box w="100%" p="4" textAlign="center" textTransform="uppercase" fontWeight="bold" bg={useColorModeValue("gray.100", "gray.900")} fontStyle="i">
          <Container maxW={"1140px"} px={"4"}>
            Mern Stack Project development. power by @yeachen abir
          </Container>
      </Box>
    </>
  )
}
