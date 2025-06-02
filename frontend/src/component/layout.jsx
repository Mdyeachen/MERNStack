import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Header from './header'
import Footer from './footer'

export default function Layout() {
  return (
    <div>
        <Header />
        <Box minH="75vh" h="100%">
          <Outlet />
        </Box>
        <Footer />
    </div>
  )
}
