import { Box, Container } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Box m="auto" maxWidth="50%" fontSize="2rem" fontFamily="monospace" color="#323332" ><h3>Top Categories to choose from</h3></Box>

      <Box  maxHeight="auto" display="flex" justifyContent="space-between" p="1.5rem" flexWrap="wrap" id="backgrond-img" >
        <Box m="auto">
          <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
        </Box >
        <Box m="auto">
          <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt="" />
        </Box >
        <Box m="auto">
          <img src="https://images.meesho.com/images/marketing/1649759799809.webp" alt="" />
        </Box>
      </Box>

    </Container>
  )
}

export default Home